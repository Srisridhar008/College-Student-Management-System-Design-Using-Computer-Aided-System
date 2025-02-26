import axios from 'axios';
import React, { useState } from 'react';
import './StudentDetails.css';
import { useNavigate } from 'react-router-dom';

export default function StudentDetails() {
  const [studentDetails, setStudentDetails] = useState({
    RollNo: '',
    name: '',
    PhoneNo: '',
    email: '',
    RegNo: '',
    ABCID: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3003/api/Students', studentDetails) 
      .then((res) => {
        console.log(res.data);
        
        navigate('/student-view');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();

  return (
    <div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>RollNo:</label><br />
        <input  type='text'  name='RollNo'  value={studentDetails.RollNo}  onChange={handleChange}  required/><br />
        
        <label>Name:</label><br />
        <input  type='text'  name='name'  value={studentDetails.name}  onChange={handleChange}  required/><br />
        
        <label>PhoneNo:</label><br />
        <input  type='number'  name='PhoneNo'  value={studentDetails.PhoneNo}  onChange={handleChange}  required /><br />
        
        <label>Email:</label><br />
        <input  type='email' name='email' value={studentDetails.email} onChange={handleChange}  required /><br />
        
        <label>RegNo:</label><br />
        <input  type='number'name='RegNo' value={studentDetails.RegNo} onChange={handleChange} required  /><br />
        
        <label>ABCID:</label><br />
        <input  type='number'  name='ABCID'  value={studentDetails.ABCID} onChange={handleChange}  required /><br />
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
