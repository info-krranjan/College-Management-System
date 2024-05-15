
// src/components/CompanyList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CompanyList.css'; // Import CSS file for styling

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
