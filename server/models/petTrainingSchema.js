const mongoose = require("mongoose");

const petTrainingSchema = new mongoose.Schema({
 petTrainingID: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  trainingType: {
    type: String,
  },
  petType: {
    type: String,
    required: true,
  },
  userID: {
    type: Number,
    required: true,
  }, 
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const PetTrainings= mongoose.model("petTrainings", petTrainingSchema);

module.exports = PetTrainings;
