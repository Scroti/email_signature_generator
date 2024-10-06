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
  const [officeNr, setOfficeNr] = useState('');
  const [platforms, setPlatforms] = useState({
    instagram: false,
    facebook: false,
    linkedin: false
  });
  const [socialLinks, setSocialLinks] = useState({
    instagram: '',
    facebook: '',
    linkedin: ''
  });
  const navigate = useNavigate();
  // Handle checkbox change for selecting platforms
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPlatforms((prevPlatforms) => ({
      ...prevPlatforms,
      [name]: checked
    }));
  };

  // Handle input change for social links
  const handleLinkChange = (platform, value) => {
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [platform]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ state: email, position, name, officeNr,platforms,socialLinks  })
    // Navigate to the UserDetails page and pass the form data using state
    navigate('/user-details', { state:{ email, position, name, officeNr,platforms,socialLinks}});
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
        <Input
          type="text"
          name="officeNr"
          label="Office Number"
          placeholder="Enter your office number"
          value={officeNr}
          onChange={(e) => setOfficeNr(e.target.value)}
        />
         <div>
          <h2>Select Social Platforms (Optional)</h2>
          
          <label>
            <input 
              type="checkbox" 
              name="instagram" 
              checked={platforms.instagram} 
              onChange={handleCheckboxChange}
            />
            Instagram
          </label>
          {platforms.instagram && (
            <Input
              type="text"
              name="instagram"
              label="Instagram Username"
              placeholder="Enter Instagram username"
              value={socialLinks.instagram}
              onChange={(e) => handleLinkChange('instagram', e.target.value)}
            />
          )}
          
          <label>
            <input 
              type="checkbox" 
              name="facebook" 
              checked={platforms.facebook} 
              onChange={handleCheckboxChange}
            />
            Facebook
          </label>
          {platforms.facebook && (
            <Input
              type="text"
              name="facebook"
              label="Facebook Username"
              placeholder="Enter Facebook username"
              value={socialLinks.facebook}
              onChange={(e) => handleLinkChange('facebook', e.target.value)}
            />
          )}
          
          <label>
            <input 
              type="checkbox" 
              name="linkedin" 
              checked={platforms.linkedin} 
              onChange={handleCheckboxChange}
            />
            LinkedIn
          </label>
          {platforms.linkedin && (
            <Input
              type="text"
              name="linkedin"
              label="LinkedIn Username"
              placeholder="Enter LinkedIn username"
              value={socialLinks.linkedin}
              onChange={(e) => handleLinkChange('linkedin', e.target.value)}
            />
          )}
        </div>

        <button type="submit" className="login-button">Create your signature</button>
      </form>
    </div>
  );
};

export default InfoAdder;
