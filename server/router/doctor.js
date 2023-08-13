const express = require("express");
const router = express.Router();

require("../db/connection");
const Users = require("../models/userSchema");
const Credentials = require("../models/credentialSchema");


router.get("/allDoctors", async (req, res) => {
    try {
      // Fetch all doctors from the database
      const allDoctors= await Users.find({ role: "doctor" });

      res.status(200).json(allDoctors);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


//doctor registration - will only accessed by admin

router.post("/doctor/register", async (req, res) => {

  const { firstName, middleName, lastName, email, phone, userID, password, address, imgLink } =
    req.body;
    const role = "doctor";
  if (!firstName || !lastName || !password || !email) {
    return res
      .status(422)
      .json({ error: "Please fillup the required field properly!" });
  }
  try {
    const userIDExist = await Users.findOne({ userID: userID });
    const emailExist = await Users.findOne({ email: email });
    const userIDinCredsExist = await Credentials.findOne({ userID: userID });

    if (userIDExist || emailExist || userIDinCredsExist) {
      return res.status(422).json({ error: "A doctor already exists!" });
    } else {
      const doctor = new Users({
        userID,
        firstName,
        middleName,
        lastName,
        email,
        phone,
        role,
        address,
        imgLink,
      });
      const credential = new Credentials({
        userID,
        password,
      });
      await doctor.save();
      await credential.save();
      res.status(201).json({ message: "Doctor registration Successful!" });
    }
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;