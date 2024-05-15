// models/Card.js

const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
  amount: { type: Number, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Card', cardSchema);
