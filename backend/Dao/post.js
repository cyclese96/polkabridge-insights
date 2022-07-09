var ItemModel = require("../Models/Posts");

const limit = 15;

const itemDao = {
  //get request by ID
  async getItemById(id) {
    return await ItemModel.findById(id);
  },

  //get all items
  async getAllItems() {
    return await ItemModel.find({});
  },

  //get item by address
  async createItem(itemData) {
    let itemCount = await ItemModel.find({
      address: itemData.address,
    }).countDocuments();
    if (itemCount === 0) {
      await ItemModel.insertMany([itemData]);
    }
    return await ItemModel.findOne({
      address: itemData.address,
    });
  },

  // item post request
  async createItem(itemData) {
    let itemCount = await ItemModel.find({
      title: itemData.title,
    }).countDocuments();
    if (itemCount === 0) {
      await ItemModel.insertMany([itemData]);
    }
    return await ItemModel.findOne({
      title: itemData.title,
    });
  },

  //get item by  special category
  async getItemsByCategory(category) {
    let catData = await ItemModel.find({ category });
    return catData;
  },

  //Get recent item
  async getItemByDate() {
    return await ItemModel.find().sort({ createdDate: -1 });
  },

  //Get recent 3 item
  async getRecentItem() {
    return await ItemModel.find().sort({ _id: -1 }).limit(3);
  },
};


module.exports = itemDao;