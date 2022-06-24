const User = require("../Models/User.js");

//User register
exports.registerUser = async (req, res) => {
  const { username, firstname, password, lastName } = req.body;

  const newUser = new User({ username, firstname, password, lastName });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
