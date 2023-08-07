const express = require("express");
const router = express.Router();

const Products = require("../models/productSchema");

// Route to add a new product
router.post("/product/add", async (req, res) => {
  const { productID, productName, category, price, currency, quantity } = req.body;

  try {
    const newProduct = new Products({
      productID,
      productName,
      category,
      price,
      currency,
      quantity, 
    });

    await newProduct.save();

    res.status(201).json({ message: "Product upload Successful!" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
