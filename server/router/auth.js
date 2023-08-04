const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bscrypt = require("bcryptjs");

require("../db/connection");
const Users = require("../models/userSchema");
const Credentials = require("../models/credentialSchema");

router.post("/signup", async (req, res) => {
  const { firstName, middleName, lastName, email, phone, userID, password } =
    req.body;
  if (!firstName || !lastName || !password || !email) {
    return res
      .status(422)
      .json({ error: "Please fillup the required field properly!" });
  }
  try {
    const userIDExist = await Users.findOne({ userID: userID });
    const emailExist = await Users.findOne({ email: email });
    const userIDinCredsExist = await Credentials.findOne({ userID: userID });

    if (userIDExist && emailExist && userIDinCredsExist) {
      return res.status(422).json({ error: "A user already exists!" });
    } else {
      const user = new Users({
        userID,
        firstName,
        middleName,
        lastName,
        email,
        phone,
      });
      const credential = new Credentials({
        userID,
        password,
      });
      await user.save();
      await credential.save();
      res.status(201).json({ message: "User registration Successful!" });
    }
  } catch (error) {
    console.log(error);
  }
});

/**
 * Login API
 */
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please filltup the data!" });
    }
    const emailExist = await Users.findOne({
      email: email,
    });
    if (emailExist) {
      const userID = emailExist.userID;
      const userIDExist = await Credentials.findOne({
        userID: userID,
      });
      if (userIDExist) {
        const isMatched = await bscrypt.compare(password, userIDExist.password);
        token = await userIDExist.generateAuthToken();
        console.log(token);
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 604800000), //for 7days
        });
        if (!isMatched) {
          res.json({ error: "Invalid Credentials!" });
        } else {
          res.status(200).json({ message: "Login Successful!", userID });
        }
      } else {
        res.status(400).json({ error: "Invalid Credentials!" });
      }
    } else {
      res.status(404).json({ error: "User not found!" });
    }
  } catch (error) {}
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwt", { path: "/" });
  res.status(200).json({ message: "Successfully Logged Out!" });
});

module.exports = router;