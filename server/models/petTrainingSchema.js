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
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPhone: {
    type: String,
    required: true,
  },
});

const PetTrainings= mongoose.model("petTrainings", petTrainingSchema);

module.exports = PetTrainings;
