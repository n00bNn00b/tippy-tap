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

const BookingDoctors = mongoose.model("bookingDoctors", bookingDoctorSchema);

module.exports = BookingDoctors;
