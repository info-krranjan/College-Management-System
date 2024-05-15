// controllers/cardController.js

const Card = require('../models/Card');

exports.saveCardDetails = async (req, res) => {
  try {
    const { cardNumber, expiryDate, cvv, amount } = req.body;
    const card = new Card({ cardNumber, expiryDate, cvv, amount });
    await card.save();
    res.json({ success: true, message: 'Card details saved successfully.' });
  } catch (error) {
    console.error('Error saving card details:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};
