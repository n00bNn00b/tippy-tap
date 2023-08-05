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

const Vaccinations = mongoose.model("vaccinations", vaccinationSchema);

module.exports = Vaccinations;
