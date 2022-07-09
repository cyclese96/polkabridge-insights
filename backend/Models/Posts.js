const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  tags: {
    type: String,
  },
  image: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  category: {
    type: String,
    required: true,
  },
  readTime: {
    type: String,
    required: true,
  },

  createdDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model("posts", PostSchema);
