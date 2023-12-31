const mongoose = require("mongoose");

const vaccinationSchema = new mongoose.Schema({
 vaccinationID: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  vaccineName: {
    type: String,
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

const Vaccinations = mongoose.model("vaccinations", vaccinationSchema);

module.exports = Vaccinations;
