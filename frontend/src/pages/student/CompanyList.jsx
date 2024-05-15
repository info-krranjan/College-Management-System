
// src/components/CompanyList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CompanyList.css'; // Import CSS file for styling
import RegistrationForm from './RegistrationForm'; // Import your RegistrationForm component

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [registrationOpen, setRegistrationOpen] = useState(false); // State to track if registration form is open
  const [selectedCompany, setSelectedCompany] = useState(null); // State to track the selected company for registration

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/companylist/:id'); // Update the endpoint accordingly
        setCompanies(response.data.data.companies);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  const handleApply = (companyId) => {
    // Set the selected company for registration
    setSelectedCompany(companyId);
    // Open the registration form
    setRegistrationOpen(true);
  };

  const handleRegistrationClose = () => {
    // Close the registration form
    setRegistrationOpen(false);
    // Reset the selected company
    setSelectedCompany(null);
    // Update the companies array to mark the company as applied
    setCompanies(prevCompanies => {
      return prevCompanies.map(company => {
        if (company._id === selectedCompany) {
          return { ...company, applied: true };
        }
        return company;
      });
    });
  };

  return (
    <div>
      <h2>Company List</h2>
      <table className="company-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Job Location</th>
            <th>Designation</th>
            <th>Job Description</th>
            <th>Branch</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Eligibility</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th> {/* New column for Action */}
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.companyName}</td>
              <td>{company.jobLocation}</td>
              <td>{company.designation}</td>
              <td>{company.jobDescription}</td>
              <td>{company.branch}</td>
              <td>{company.qualification}</td>
              <td>{company.experience}</td>
              <td>{company.salary}</td>
              <td>{company.eligibility}</td>
              <td>{company.phoneNumber}</td>
              <td>{company.email}</td>
              <td>
                {company.applied ? (
                  <button className="applied-btn" disabled>Applied</button>
                ) : (
                  <button className="apply-btn" onClick={() => handleApply(company._id)}>Apply Now</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {registrationOpen && (
        <div className="registration-form-container">
          <RegistrationForm company={selectedCompany} onClose={handleRegistrationClose} />
        </div>
      )}
    </div>
  );
};

export default CompanyList;
