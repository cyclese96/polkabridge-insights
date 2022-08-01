const Posts = require("../Models/Posts");

const PostDao = {

    async getNewsById(reqId){
        return await Posts.findOne({id:reqId}).populate("user"); 
    },

  async getRecentNews() {
    return await Posts.find({}).sort({ _id: -1 }).limit(9).populate("user");
  },

  async getNewsByPageNo(page_no) {
    return await Posts.find()
    .sort({ date: -1 })
    .limit((page_no - 1) * 10 + 10)
    .skip((page_no - 1) * 10).populate("user");
  },

  async getNewsByCategoryByPageNo(category,page_no) {
    return await Posts.find({ category: category })
    .sort({ date: -1 })
    .limit((page_no - 1) * 10 + 10)
    .skip((page_no - 1) * 10).populate("user");
  },
  
};

module.exports = PostDao;