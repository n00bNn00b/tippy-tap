const mongoose = require("mongoose");

const petSpaSchema = new mongoose.Schema({
 petSpaID: {
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

const PetSpas = mongoose.model("petSpas", petSpaSchema);

module.exports = PetSpas;
