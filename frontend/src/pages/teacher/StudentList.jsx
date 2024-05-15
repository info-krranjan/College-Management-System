
// UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css'; // Import external CSS file for styling

const StudentList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/studentlist');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);


  // Function to format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };


  // Function to determine action status based on user data
  const getActionStatus = (user) => {
    // Logic to determine action status
    // For example, if user.experience is greater than 1, status is "Placed", otherwise "Pending"
    return user.experience > 1 ? 'Placed' : 'Pending';
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">Student List</h2>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>City</th>
            <th>State</th>
            <th>Address</th>
            <th>Metric %</th>
            <th>10+2 %</th>
            <th>Experience</th>
            <th>Action</th> {/* New column for action */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.companyname}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{formatDate(user.dob)}</td>
              {/* <td>{user.dob}</td> */}
              <td>{user.gender}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.address}</td>
              <td>{user.metricPercentage}</td>
              <td>{user.twelvePercentage}</td>
              <td>{user.experience}</td>
              <td>{getActionStatus(user)}</td> {/* Display action status */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
