const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timeStamps: true }
);

module.exports = User = mongoose.model("users", UserSchema);
