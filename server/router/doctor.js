const express = require("express");
const router = express.Router();

require("../db/connection");
const Users = require("../models/userSchema");

router.get("/doctor/allDoctors", async (req, res) => {
    try {
      // Fetch all doctors from the database
      const allDoctors= await Users.find({ role: "doctor" });

      res.status(200).json(allDoctors);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;