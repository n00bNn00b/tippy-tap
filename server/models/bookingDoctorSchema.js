const mongoose = require("mongoose");

const bookingDoctorSchema = new mongoose.Schema({
 bookingID: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  doctorID: {
    type: Number,
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

const BookingDoctors = mongoose.model("bookingDoctors", bookingDoctorSchema);

module.exports = BookingDoctors;
