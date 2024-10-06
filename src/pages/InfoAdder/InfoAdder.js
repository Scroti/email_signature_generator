// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Input/Input"
import './InfoAdder.css'; // Import the CSS file for styling

const InfoAdder = () => {
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');
  const [officeNr, setOfficeNr] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ state: email, position, name, officeNr  })
    // Navigate to the UserDetails page and pass the form data using state
    navigate('/user-details', { state:{ email:email, position, name, officeNr}});
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
      <Input
          type="text"
          name="name"
          label="First and Last Name"
          placeholder="Enter your first and last name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <Input
          type="text"
          name="position"
          label="Position"
          placeholder="Enter your position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
       <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          name="officeNr"
          label="Office Number"
          placeholder="Enter your office number"
          value={officeNr}
          onChange={(e) => setOfficeNr(e.target.value)}
        />
        <button type="submit" className="login-button">Submit</button>
      </form>
    </div>
  );
};

export default InfoAdder;
