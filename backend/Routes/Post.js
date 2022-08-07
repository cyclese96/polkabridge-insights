const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Post = require("../Models/Posts");
const User = require("../Models/User");
const checkObjectId = require("../middleware/checkObjectId");
const AWS = require("aws-sdk");
const { upload } = require("../middleware/upload");
const PostDao = require("../Dao/postDao");

// GET - 9 recent news
router.get("/recent/", async (req, res) => {
  try {
    const data = await PostDao.getRecentNews();
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

// GET - All news by category and page no
router.get("/posts/:category/:page_number", async (req, res) => {
  try {
    const pageNo = req.params.page_number ? req.params.page_number : 1;
    let posts;
    if (req.params.category === "all") {
      posts = await PostDao.getNewsByPageNo(pageNo);
    } else {
      posts = await PostDao.getNewsByCategoryByPageNo(
        req.params.category,
        pageNo
      );
    }
    res.status(200).json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// GET - Post by id
router.get("/post/:id", checkObjectId("id"), async (req, res) => {
  try {
    const post = await PostDao.getNewsById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route    POST api/posts
// @desc     Create a post
// @access   Private
// post a new blog tested
router.post("/post/", auth, upload.single("image"), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    });

    const uploadedImage = await s3
      .upload({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: req.file.originalname,
        Body: req.file?.buffer,
        ContentType: req?.file?.mimetype,
      })
      .promise();

    console.log("uploaded image ", uploadedImage);

    const uploadedImagePath = uploadedImage?.Location;

    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
      user: req.user.id,
      category: req.body.category,
      image: uploadedImagePath,
      readTime: req.body.readTime,
      poster_name: req.body.poster_name,
    });

    const post = await newPost.save();

    res.status(201).json(post);
  } catch (err) {
    console.log("req body ", req.file);
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/posts/:id  tested
// @desc     Delete a post
// @access   Private
router.delete("/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();

    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    PUT api/posts/like/:id tested
// @desc     Like a post
// @access   Private
router.put("/like/:id", auth, checkObjectId("id"), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Post already liked" });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/posts/unlike/:id   tested
// @desc     Unlike a post
// @access   Private
router.put("/unlike/:id", auth, checkObjectId("id"), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has not yet been liked
    if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Post has not yet been liked" });
    }

    // remove the like
    post.likes = post.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await post.save();

    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
router.post(
  "/comment/:id",
  auth,
  checkObjectId("id"),
  check("text", "Text is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    post.comments = post.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );
    await post.save();

    return res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
