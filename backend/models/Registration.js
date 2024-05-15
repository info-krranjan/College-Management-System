
// models/Registration.js

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  companyname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  metricPercentage: {
    type: String,
    required: true
  },
  twelvePercentage: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
