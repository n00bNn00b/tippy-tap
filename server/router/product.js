const express = require("express");
const router = express.Router();

const Products = require("../models/productSchema");

// Route to add a new product
router.post("/product/add", async (req, res) => {
  const { productName, category, price, currency } = req.body;

  try {

    const newProduct = new Products({
      productName,
      category,
      price,
      currency,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product upload Successful!" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
