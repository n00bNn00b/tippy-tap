const mongoose = require("mongoose");

const bookingDoctorSchema = new mongoose.Schema({
 bookingId: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    require: true,
  },
  doctorName: {
    type: String,
    require: true,
  },
  petType: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPhone: {
    type: String,
    require: true,
  },
});

const BookingDoctors = mongoose.model("bookingDoctors", bookingDoctorSchema);

module.exports = BookingDoctors;
