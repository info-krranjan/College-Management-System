
// RegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css'; // Import external CSS file for styling

const RegistrationForm = ({ company, onClose }) => {
  const [formData, setFormData] = useState({
    companyId: company,
    companyname:'',
    name: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
    city: '',
    state: '',
    address: '',
    metricPercentage: '',
    twelvePercentage: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/registerstudent', formData); // Adjust endpoint accordingly
      onClose(); // Close the registration form
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Registration Form</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="companyname">Enter Company Name:</label>
          <input
            type="companyname"
            id="companyname"
            name="companyname"
            value={formData.companyname}
            onChange={handleChange}
            placeholder="Enter company name again you applied for"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter your state"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Complete Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your complete address"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="metricPercentage">Metric Percentage:</label>
          <input
            type="text"
            id="metricPercentage"
            name="metricPercentage"
            value={formData.metricPercentage}
            onChange={handleChange}
            placeholder="Enter your metric percentage"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="twelvePercentage">10+2 Percentage:</label>
          <input
            type="text"
            id="twelvePercentage"
            name="twelvePercentage"
            value={formData.twelvePercentage}
            onChange={handleChange}
            placeholder="Enter your 10+2 percentage"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Enter your experience"
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
