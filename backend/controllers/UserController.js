// controllers/UserController.js

const Registration = require('../models/Registration');
const Company = require('../models/Company');

exports.getAllUsersWithCompanies = async (req, res) => {
  try {
    // Fetch all registrations
    const registrations = await Registration.find().populate('companyId');

    // Extract necessary user details and company names
    const usersWithCompanies = registrations.map(registration => ({
      companyname: registration.companyname,
      name: registration.name,
      email: registration.email,
      mobile: registration.mobile,
      dob: registration.dob,
      gender: registration.gender,
      city: registration.city,
      state: registration.state,
      address: registration.address,
      metricPercentage: registration.metricPercentage,
      twelvePercentage: registration.twelvePercentage,
      experience: registration.experience,
      // companyName: registration.companyId.companyName // Access company name through populated field
    }));

    // console.log(usersWithCompanies); // Print data in console
    res.json(usersWithCompanies);
  } catch (error) {
    console.error('Error fetching users with companies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
