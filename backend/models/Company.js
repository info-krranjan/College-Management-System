// // models/Company.js
// const mongoose = require('mongoose');

// const companySchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: String,
//     required: true,
//   },
// });

// const Company = mongoose.model('Company', companySchema);

// module.exports = Company;

// models/Company.js

const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
