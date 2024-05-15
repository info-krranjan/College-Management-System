// // src/components/CompanyForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button } from '@mui/material';

// const CompanyForm = () => {
//   const [companyData, setCompanyData] = useState({
//     title: '',
//     description: '',
//     location: '',
//     date: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCompanyData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     axios.post('http://localhost:5000/add', companyData)
//       .then(response => {
//         console.log(response.data);
//         // Optionally, you can reset the form after submission
//         setCompanyData({
//           title: '',
//           description: '',
//           location: '',
//           date: '',
//         });
//       })
//       .catch(error => {
//         console.error('Error adding company:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Add Company Details</h2>
//       <TextField
//         name="title"
//         label="Title"
//         value={companyData.title}
//         onChange={handleChange}
//       />
//       <TextField
//         name="description"
//         label="Description"
//         value={companyData.description}
//         onChange={handleChange}
//       />
//       <TextField
//         name="location"
//         label="Location"
//         value={companyData.location}
//         onChange={handleChange}
//       />
//       <TextField
//         name="date"
//         label="Date"
//         type="date"
//         value={companyData.date}
//         onChange={handleChange}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//       <Button variant="contained" onClick={handleSubmit}>Submit</Button>
//     </div>
//   );
// };

// export default CompanyForm;





// src/components/CompanyForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './CompanyForm.css'

const CompanyForm = () => {
  const [companyData, setCompanyData] = useState({
    companyName: '',
    jobLocation: '',
    designation: '',
    jobDescription: '',
    branch: '',
    qualification: '',
    experience: '',
    salary: '',
    eligibility: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    axios.post('http://localhost:5000/add', companyData)
      .then(response => {
        console.log(response.data);
        // Optionally, you can reset the form after submission
        setCompanyData({
          companyName: '',
          jobLocation: '',
          designation: '',
          jobDescription: '',
          branch: '',
          qualification: '',
          experience: '',
          salary: '',
          eligibility: '',
          phoneNumber: '',
          email: '',
        });
      })
      .catch(error => {
        console.error('Error adding company:', error);
      });
  };

  return (
    <form style={{marginLeft: 50, marginTop: 20}} onSubmit={handleSubmit}>
      <h2><u>Add Company Details</u></h2>
      <div className="main-area">
      <div className="form-row">
        <TextField
          name="companyName"
          label="Company Name"
          value={companyData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <TextField
          name="jobLocation"
          label="Job Location"
          value={companyData.jobLocation}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <TextField
          name="designation"
          label="Designation"
          value={companyData.designation}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
      <TextField
        name="jobDescription"
        label="Job Description"
        value={companyData.jobDescription}
        onChange={handleChange}
      />
      </div>
      <div className="form-row">
      <TextField
        name="branch"
        label="Branch"
        value={companyData.branch}
        onChange={handleChange}
      />
      </div>
      <div className="form-row">
      <TextField
        name="qualification"
        label="Qualification"
        value={companyData.qualification}
        onChange={handleChange}
      />
      </div>
      <div className="form-row">
      <TextField
        name="experience"
        label="Experience"
        value={companyData.experience}
        onChange={handleChange}
      />
      </div>
      <div className="form-row">
      <TextField
        name="salary"
        label="Salary"
        value={companyData.salary}
        onChange={handleChange}
      />
      </div>
      <div className="form-row">
      <TextField
        name="eligibility"
        label="Eligibility"
        value={companyData.eligibility}
        onChange={handleChange}
      />
      </div>
      <div className="form-row">
      <TextField
        name="phoneNumber"
        label="Phone Number"
        value={companyData.phoneNumber}
        onChange={handleChange}
      />
      </div>
      <div className="form-row">
      <TextField
        name="email"
        label="Email"
        type="email"
        value={companyData.email}
        onChange={handleChange}
      />
      </div>
      {/* Add similar divs for other fields */}
      </div>
      <Button style={{marginLeft: 60 }} type="submit" variant="contained">Submit</Button>
    </form>
  );
};

export default CompanyForm;
