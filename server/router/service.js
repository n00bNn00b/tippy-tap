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
      bookingId,
      date,
      doctorName,
      doctorId,
      petType,
      userId,
      userName,
      userEmail,
      userPhone,
    } = req.body;
  
    try {

      // Check if the user with the given userID exists
      const user = await Users.findOne({ userID: userId });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Check if the doctor with the given userID exists
      const doctor = await Users.findOne({ userID: doctorId });
  
      if (!doctor) {
        return res.status(404).json({ error: "Doctor not found" });
      }
  
      const newBooking = new BookingDoctors({
        bookingId,
        date,
        doctorName,
        doctorId,
        petType,
        userId,
        userName,
        userEmail,
        userPhone,
      });
  
      // Save the new booking to the database
      await newBooking.save();
  
      res.status(201).json(newBooking);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
});


// Route to post a new vaccination
router.post("/service/vaccination", async (req, res) => {
    const {
      vaccinationId,
      date,
      vaccineName,
      petType,
      userId,
      userName,
      userEmail,
      userPhone,
      doctorId, // Assuming doctorId is also included in the request body
    } = req.body;
  
    try {
      // Check if the user with the given userId exists
      const user = await Users.findOne({ userID: userId });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
  
      // Create a new vaccination entry
      const newVaccination = new Vaccinations({
        vaccinationId,
        date,
        vaccineName,
        petType,
        userId,
        userName,
        userEmail,
        userPhone,
      });
  
      // Save the new vaccination to the database
      await newVaccination.save();
  
      res.status(201).json(newVaccination);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


// Route to post a new pet spa service
router.post("/service/petSpa", async (req, res) => {
    const {
      petSpaId,
      date,
      petType,
      userId,
      userName,
      userEmail,
      userPhone,
    } = req.body;
  
    try {
      // Check if the user with the given userId exists
      const user = await Users.findOne({ userID: userId });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Create a new pet spa service entry
      const newPetSpaService = new PetSpas({
        petSpaId,
        date,
        petType,
        userId,
        userName,
        userEmail,
        userPhone,
      });
  
      // Save the new pet spa service to the database
      await newPetSpaService.save();
  
      res.status(201).json(newPetSpaService);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  // Route to post a new pet training service
router.post("/service/petTraining", async (req, res) => {
    const {
      petTrainingId,
      date,
      trainingType,
      petType,
      userId,
      userName,
      userEmail,
      userPhone,
    } = req.body;
  
    try {
      // Check if the user with the given userId exists
      const user = await Users.findOne({ userID: userId });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Create a new pet training service entry
      const newPetTraining = new PetTrainings({
        petTrainingId,
        date,
        trainingType,
        petType,
        userId,
        userName,
        userEmail,
        userPhone,
      });
  
      // Save the new pet training service to the database
      await newPetTraining.save();
  
      res.status(201).json(newPetTraining);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


module.exports = router;