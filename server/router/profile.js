const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/connection");
const Users = require("../models/userSchema");
const Credentials = require("../models/credentialSchema");


// Route to get a specific user by userID

router.get("/profile/:userID", async (req, res) => {

  try {
    const userID = req.params.userID;
    const profile = await Users.findOne({ userID : userID} );

    if(!profile) {
      res.status(402).json({ error: "User profile not found" });
    } else {
     res.status(200).json(profile);
    }


  } catch (err) {
    console.log(err);
    res.status(402).json({ error: "User profile not found" });
  }

  });


// Route to update a specific user by userID
router.put("/profile/update/:userID", async (req, res) => {

    const userID = req.params.userID; 
    const updates = req.body; 
  
    try {
  
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
