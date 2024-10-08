// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Input/Input"
import './InfoAdder.css'; // Import the CSS file for styling
import logo from '../../assets/logo.png'
const InfoAdder = () => {
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ state: email, position, name})
    navigate('/user-details', { state:{ email, position, name}});
  };

  return (
    <div className="login-container">
        <img src={logo} />
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
        <button type="submit" className="login-button">Create your signature</button>
      </form>
    </div>
  );
};

export default InfoAdder;
