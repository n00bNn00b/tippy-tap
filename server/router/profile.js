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


// Route to update a user's password
router.put("/profile/:userID/changePassword", async (req, res) => {
  const userID = req.params.userID; 
  const { oldPassword, newPassword, confirmPassword } = req.body; 

  try {
    // Find the credentials with the given userID
    const credential = await Credentials.findOne({ userID: userID });

    

    if (!credential) {
      return res.status(404).json({ error: "User credentials not found" });
    }

    // Check if the old password matches
    const isMatched = await bcrypt.compare(oldPassword, credential.password);


    if (!isMatched) {
      return res.status(400).json({ error: "Invalid old password" });
    }

    // Check if the two new passwords match
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: "New passwords do not match" });
    }

    // Hash the new password before storing it in the database
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // Update the credentials' password in the database
    credential.password = hashedPassword;
    await credential.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    // If there's an error, respond with an error message
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
