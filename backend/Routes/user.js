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
const Posts = require("../Models/Posts");
const { getToken } = require("../config/password-service");

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
    console.log("error ", errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, username, bio, location } = req.body;

    console.log("body ", req.body);
    try {
      let user = await User.findOne({ email });

      if (user) {
        console.log("user exists");
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
        username: username,
        avatar: default_avatar,
        bio: bio,
        location: location,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      const token = await getToken(payload);

      res.status(201).json({ success: true, token: token });
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

      const token = await getToken(payload);
      console.log("token ", token);
      res.status(201).json({ success: true, token: token });
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

    const result = await Posts.aggregate([
      {
        $group: {
          _id: "$user",
          count: { $count: {} },
        },
      },
    ]);

    const sortedItems = result?.sort((a, b) => {
      return b.count - a.count;
    });
    const userIds = sortedItems?.map((item) => item?._id);
    const users = await User.find({ id: { $in: userIds } });

    const finalResult = sortedItems.map((item, index) => {
      return { count: item?.count, user: users?.[index] };
    });

    console.log("result", finalResult);

    res.status(200).json(finalResult);
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

// 1. create post not working
// 2. list of user created post
// 3. profile update not working

// @route PUT /api/auth-apis/v1/user"
// @desc UPDATE user, phone, email default fiat
router.put("/update-profile", auth, async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userId = req.user.id;

    const { email, username, bio, location, name } = req.body;

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        errors: {
          msg: "Request body should contain only atleast one field to update",
        },
      });
    }

    //1 check email
    //2 check phone
    const updateObject = {};

    const userExistWithEmail = await User.findOne({ email: email });

    if (userExistWithEmail && userExistWithEmail?._id?.toString() !== userId) {
      // different user found with same email
      return res.status(400).json({
        errors: {
          msg: "different user found with same email",
          location: "body",
          param: "email",
        },
      });
    } else {
      updateObject.email = email;
    }

    if (name) {
      updateObject.name = name;
    }

    if (username) {
      updateObject.userName = username;
    }

    if (bio) {
      updateObject.bio = bio;
    }

    if (location) {
      updateObject.location = location;
    }

    await User.findByIdAndUpdate(userId, {
      $set: updateObject,
    });

    const user = await User.findById(userId);

    return res.status(201).send(user);
  } catch (error) {
    console.log("user route error ", error);
    res.status(401).send({ errors: [{ msg: "Server error" }] });
  }
});

// @route   GET api/profile/test   tested
// @desc    Tests profile route
// @access  Public
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Profile not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
