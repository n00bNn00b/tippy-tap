const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  imgLink: {
    type: String,
  },
});

const Products = mongoose.model("products", productSchema);

module.exports = Products;
