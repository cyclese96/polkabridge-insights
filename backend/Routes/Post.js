const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Post = require("../Models/Posts");
const User = require("../Models/User");
const checkObjectId = require("../middleware/checkObjectId");
const AWS = require("aws-sdk");
const { upload } = require("../middleware/upload");
const normalize = require('normalize-url');
const gravatar = require('gravatar');

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

    // console.log("req ", req.file);
    const uploadedImage = await s3
      .upload({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: req.file.originalname,
        Body: req.file?.buffer,
        ContentType: req?.file?.mimetype,
      })
      .promise();

    // console.log("uploaded image ", uploadedImage);


    const uploadedImagePath = uploadedImage?.Location;

    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
      user: req.user.id,
      category: req.body.category,
      image: uploadedImagePath,
      readTime: req.body.readTime,
      username: req.body.username,
      poster_name: req.body.poster_name,
      
     
 
    });

    const post = await newPost.save();

    res.json(post);
  } catch (err) {
    console.log("req body ", req.file);
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/posts
// @desc     Get all posts by page
// @access   Private  tested
router.get("/posts/:page_number", auth, async (req, res) => {
  try {
    console.log("req", req.params.page_number);
    const page = req.params.page_number ? req.params.page_number : 1;
    const posts = await Post.find()
      .populate("user")
      .sort({ date: -1 })
      .limit((page - 1) * 10 + 10)
      .skip((page - 1) * 10);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/posts
// @desc     Get all posts by page
// @access   public  tested
router.get("/posts/public/:category/:page_number", async (req, res) => {
  try {
    const page = req.params.page_number ? req.params.page_number : 1;
    if (req.params.category === "all") {
      const posts = await Post.find()
        .populate("user")
        .sort({ date: -1 })
        .limit((page - 1) * 10 + 10)
        .skip((page - 1) * 10);

      res.json(posts);
    } else {
      const posts = await Post.find({ category: req.params.category })
        .populate("user")
        .sort({ date: -1 })
        .limit((page - 1) * 10 + 10)
        .skip((page - 1) * 10);

      res.json(posts);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// // @route    GET api/posts
// // @desc     Get all posts by page
// // @access   public  tested
// router.get("/posts/public/weekly/:page_number", async (req, res) => {
//   try {
//     // console.log("req", req.params.page_number);

//     const page = req.params.page_number ? req.params.page_number : 1;
//     var week_1 = new Date();
//     var pastDate = week_1.getDate() - 7;
//     week_1.setDate(pastDate);
//     const posts = await Post.find()
//       .week_1.populate("user")
//       .sort({ week: -1 })
//       .limit((page - 1) * 6 + 6)
//       .skip((page - 1) * 6);

//     res.json(posts);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private

//Get a post by Post id tested
router.get("/post/:id", auth, checkObjectId("id"), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("user");

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (err) {
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

//Recent Post (Get recent Item)
router.get("/recent/", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Post.find().sort({ _id: -1 }).limit(3);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

//(Get recent Item)
router.get("/top/", async (req, res) => {
  const tag = "top";
  const filter = {};
  filter.tag = { $regex: tag };

  try {
    const data = await Post.find(filter).sort({ createdDate: -1 }).limit(6);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

//(Get recent Item)
router.get("/today/", async (req, res) => {
  try {
    const data = await Post.find().sort({ createdDate: -1 }).limit(10);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

//(Get recent Item)
router.get("/trending/", async (req, res) => {
  const tag = "trending";
  const filter = {};
  filter.tags = { $regex: tag };

  try {
    const data = await Post.find(filter).sort({ createdDate: 1 }).limit(10);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

//(Get recent Item)
router.get("/weekly_top/", async (req, res) => {
  const tag = "weekly_top";
  const filter = {};
  filter.tags = { $regex: tag };

  try {
    const data = await Post.find(filter).sort({ createdDate: 1 }).limit(10);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});
module.exports = router;
