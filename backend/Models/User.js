const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
  
    },
    userName: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
    },
    bio:{
      type: String,
    },
    location:{
      type: String,
    },

    avatar: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timeStamps: true }
);

module.exports = User = mongoose.model("users", UserSchema);
