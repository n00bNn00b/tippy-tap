const mongoose = require("mongoose");

const petSpaSchema = new mongoose.Schema({
 petSpaId: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  petType: {
    type: String,
    required: true,
  },
  userId: {
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

const PetSpas = mongoose.model("petSpas", petSpaSchema);

module.exports = PetSpas;
