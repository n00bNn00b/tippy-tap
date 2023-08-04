const mongoose = require("mongoose");

const bookingDoctorSchema = new mongoose.Schema({
 bookingId: {
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
  doctorId: {
    type: Number,
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

const BookingDoctors = mongoose.model("bookingDoctors", bookingDoctorSchema);

module.exports = BookingDoctors;
