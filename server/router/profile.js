const express = require("express");
const router = express.Router();

require("../db/connection");
const Users = require("../models/userSchema");



// Route to get a specific user by userID

router.get("/profile/:userID", async (req, res) => {
    const userID = req.params.userID; // Get the userID from the request parameters
  
    try {
      // Fetch the user with the given userID from the database
      const user = await Users.findOne({ userID: userID });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

// Route to update a specific user by userID
router.put("/profile/update/:userID", async (req, res) => {

    const userID = req.params.userID; 
    const updates = req.body; 
  
    try {
      // Exclude updating the userID, password field
      delete updates.userID;
      delete updates.password;
  
      // Find the user with the given userID and update the fields
      const updatedUser = await Users.findOneAndUpdate({ userID: userID }, updates, {
        new: true, // Return the updated document
      });
  
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


module.exports = router;
