const express = require("express");
const router = express.Router();

require("../db/connection");
const Users = require("../models/userSchema");

router.get("/allUsers", async (req, res) => {
    try {
      // Fetch all users from the database
      const allUsers = await Users.find({ role: "user" });

      res.status(200).json(allUsers);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;