const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const User = require("../Models/User");

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
    console.log(req.body);

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name: name,
        email: email,
        password: password,
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

module.exports = router;
