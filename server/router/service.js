const express = require("express");
const router = express.Router();

require("../db/connection");
const Users = require("../models/userSchema");
const BookingDoctors = require("../models/bookingDoctorSchema");
const Vaccinations = require("../models/vaccinationSchema");
const PetSpas = require("../models/petSpaSchema");
const PetTrainings = require("../models/petTrainingSchema");


// Route to create a new booking for a doctor
router.post("/service/bookDoctor", async (req, res) => {
    const {
      bookingID,
      date,
      doctorName,
      doctorID,
      petType,
      userID,
      firstName,
      middleName,
      lastName,
      email,
      phone,
      address,
    } = req.body;
  
    try {

      // Check if the user with the given userID exists
      const user = await Users.findOne({ userID: userID });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Check if the doctor with the given userID exists
      const doctor = await Users.findOne({ userID: doctorID });
  
      if (!doctor) {
        return res.status(404).json({ error: "Doctor not found" });
      }
  
      const newBooking = new BookingDoctors({
        bookingID,
        date,
        doctorName,
        doctorID,
        petType,
        userID,
        firstName,
        middleName,
        lastName,
        email,
        phone,
        address,
      });
  
      // Save the new booking to the database
      await newBooking.save();
  
      res.status(201).json({ message: "Booking Doctor Successful!" });

    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
});


// Route to post a new vaccination
router.post("/service/vaccination", async (req, res) => {
    const {
      vaccinationID,
      date,
      vaccineName,
      petType,
      userID,
      firstName,
      middleName,
      lastName,
      email,
      phone,
      address,
    } = req.body;

  
    try {
      // Check if the user with the given userID exists
      const user = await Users.findOne({ userID: userID });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
  
      // Create a new vaccination entry
      const newVaccination = new Vaccinations({
        vaccinationID,
        date,
        vaccineName,
        petType,
        userID,
        firstName,
        middleName,
        lastName,
        email,
        phone,
        address,
      });
  
      // Save the new vaccination to the database
      await newVaccination.save();
  
      res.status(201).json({ message: "Booking Vaccination Successful!" });

    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


// Route to post a new pet spa service
router.post("/service/petSpa", async (req, res) => {
    const {
      petSpaID,
      date,
      petType,
      userID,
      firstName,
      middleName,
      lastName,
      email,
      phone,
      address,
    } = req.body;
  
    try {
      // Check if the user with the given userID exists
      const user = await Users.findOne({ userID: userID });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Create a new pet spa service entry
      const newPetSpaService = new PetSpas({
        petSpaID,
        date,
        petType,
        userID,
        firstName,
        middleName,
        lastName,
        email,
        phone,
        address,
      });
  
  
      // Save the new pet spa service to the database
      await newPetSpaService.save();
  
      res.status(201).json({ message: "Booking Pet Spa Successful!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  // Route to post a new pet training service
router.post("/service/petTraining", async (req, res) => {
    const {
      petTrainingID,
      date,
      trainingType,
      petType,
      userID,
      firstName,
      middleName,
      lastName,
      email,
      phone,
      address,
    } = req.body;
  
    try {
      // Check if the user with the given userID exists
      const user = await Users.findOne({ userID: userID });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Create a new pet training service entry
      const newPetTraining = new PetTrainings({
        petTrainingID,
        date,
        trainingType,
        petType,
        userID,
        firstName,
        middleName,
        lastName,
        email,
        phone,
        address,
      });
  
      // Save the new pet training service to the database
      await newPetTraining.save();
  
      res.status(201).json({ message: "Booking Pet Training Successful!" });

    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


module.exports = router;