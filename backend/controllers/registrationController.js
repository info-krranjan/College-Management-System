// controllers/registrationController.js
const Registration = require('../models/Registration');

// Controller to handle registration
exports.registerUser = async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
