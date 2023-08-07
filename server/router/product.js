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


// Update price, currency, and quantity of a product
router.put("/updateProduct/:productID", async (req, res) => {
  const productID = req.params.productID;
  const { price, currency, quantity } = req.body;

  try {
    // Check if the product with the given productID exists
    const product = await Products.findOne({ productID });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product details
    if(price != null) {
      product.price = price; 
      product.currency = currency;
    }
    if(quantity != null) {
      if(quantity < 0) quantity = 0;
      product.quantity = quantity;  
    }

    await product.save();

    res.status(200).json({ message: "Product details updated successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Return all products
router.get("/allProducts", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Return available products (where quantity is greater than 0)
router.get("/availableProducts", async (req, res) => {
  try {
    const availableProducts = await Products.find({ quantity: { $gt: 0 } });
    res.status(200).json(availableProducts);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
