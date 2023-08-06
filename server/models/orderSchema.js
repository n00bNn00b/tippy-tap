const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
 orderID: {
    type: Number,
    required: true,
  },
  productID: {
    type: Number,
    required: true,
  },
  productName: {
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
  userID: {
    type: Number,
    required: true,
  }, 
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isDelivered: {
    type: Boolean,
  },
});

const Orders = mongoose.model("orders", orderSchema);

module.exports = Orders;
