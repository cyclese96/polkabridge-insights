const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../Models/User");
const { upload } = require("../middleware/upload");
const uploadSingleObject = require("../s3Service");

// @route    POST api/users tested
// @desc     Register user
// @access   Public tested
router.post(
  "/user",
  check("name", "Name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      const default_avatar =
        "https://polkabridge-insight.s3.amazonaws.com/default_avatar.png";
      user = new User({
        name: name,
        email: email,
        password: password,
        avatar: default_avatar,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route POST /api/auth/v1/login   tested
// @desc LOGIN with email and password
// @access PUBLIC
router.post(
  "/login",
  [
    check("email").isEmail(),
    check("password")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long")
      .matches(/\d/)
      .withMessage("must contain a number"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    // Check if user exists
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
          role: user.role,
          approved: user.approved,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.status(201).json({ message: "Login success", token: token });
        }
      );
    } catch (err) {
      res.status(500).send("Server Error");
    }
  }
);

//get users by pagination tested

router.get("/users/:page_number", auth, async (req, res) => {
  try {
    const page = req.params.page_number ? req.params.page_number : 1;
    const Users = await User.find()
      .sort({ date: -1 })
      .limit((page - 1) * 10 + 10)
      .skip((page - 1) * 10);
    res.json(Users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//get top 4  users by pagination tested
router.get("/users/top_user/:page_number", async (req, res) => {
  try {
    const page = req.params.page_number ? req.params.page_number : 1;
    const Users = await User.find()
      .sort({ date: -1 })
      .limit((page - 1) * 4 + 4)
      .skip((page - 1) * 4);
    res.json(Users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// get user by auth token
router.get("/current_user", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    console.log("user", user);
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//get user by id tested
router.get("/users/user/:user_id", auth, async (req, res) => {
  try {
    const userId = req.params.user_id;
    const user = await User.findById(userId);

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// update user profile photo

router.put(
  "/update_avatar/",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    try {
      const userId = req.user.id;

      const uploadedImagePath =
        "https://polkabridge-insight.s3.amazonaws.com/Screenshot%202022-07-07%20at%2010.46.28%20AM.png"; //await uploadSingleObject(req);

      console.log("updated pic ", uploadedImagePath);
      await User.findByIdAndUpdate(userId, {
        $set: { avatar: uploadedImagePath?.toString() },
      });

      const updatedUser = await User.findById(userId);
      res.status(200).json(updatedUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
