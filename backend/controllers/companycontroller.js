const Company = require('../models/Company');

// Create a new company
exports.createCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        company: newCompany,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json({
      status: 'success',
      data: {
        companies,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};