const mongoose = require('mongoose');
const patientDetailsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  date: Date,
  amount: Number,
  reason: String
});

const PatientDetails = mongoose.model('PateintData',patientDetailsSchema);
module.exports= PatientDetails;