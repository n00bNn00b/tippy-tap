const express = require("express");
const router = express.Router();

require("../db/connection");

const Orders = require("../models/orderSchema");
const Products = require("../models/productSchema");

// New order
router.post("/order", async (req, res) => {
  const {
    orderID,
    productID,
    productName,
    price,
    currency,
    quantity,
    userID,
    firstName,
    middleName,
    lastName,
    phone,
    address,
    date,
  } = req.body;

  try {
    const product = await Products.findOne({ productID });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (product.quantity < quantity) {
      return res.status(400).json({ error: "Not enough stock available" });
    }

    // Calculate the updated quantity after the order and update it
    const updatedQuantity = product.quantity - quantity;
    await Products.updateOne({ productID }, { quantity: updatedQuantity });

    // Create the new order
    const newOrder = new Orders({
      orderID,
      productID,
      productName,
      price,
      currency,
      quantity,
      userID,
      firstName,
      middleName,
      lastName,
      phone,
      address,
      date,
      isDelivered: false, //  isDelivered is false for new order
    });

    await newOrder.save();

    res.status(201).json({ message: "New order created successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Cancel Order
router.put("/cancelOrder/:orderID", async (req, res) => {
  const orderID = req.params.orderID;

  try {
    const order = await Orders.findOne({ orderID });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (order.isDelivered) {
      return res.status(400).json({ error: "Cannot cancel a delivered order" });
    }

    // Restore the quantity of the canceled order back to the product stock
    const product = await Products.findOne({ productID: order.productID });
    product.quantity += order.quantity;
    await product.save();

    // Delete the order from the database
    await order.deleteOne();

    res.status(200).json({ message: "Order canceled successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Order delivered
router.put("/delivered/:orderID", async (req, res) => {
  const orderID = req.params.orderID;

  try {
    const order = await Orders.findOne({ orderID });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.isDelivered = true;

    await order.save();

    res.status(200).json({ message: "Order marked as delivered" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all orders
router.get("/allOrders", async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;