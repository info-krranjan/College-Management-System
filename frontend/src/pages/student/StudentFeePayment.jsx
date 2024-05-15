

// components/PaymentForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './PaymentForm.css'; // Import CSS file for styles

const StudentFeePayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/save-card',  { cardNumber, expiryDate, cvv, amount });
      setPaymentMessage('Payment successful!');
    } catch (error) {
      console.error('Error saving card details:', error);
      setPaymentMessage('Error processing payment. Please try again.');
    }
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
        <input type="text" placeholder="Expiry Date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
        <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCVV(e.target.value)} required />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <button type="submit">Pay Now</button>
      </form>
      {paymentMessage && <p className="payment-message">{paymentMessage}</p>}
    </div>
  );
};

export default StudentFeePayment;


