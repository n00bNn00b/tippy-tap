const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
  price: {
    type: Float64Array,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  }
});

const Products = mongoose.model("products", productSchema);

module.exports = Products;
