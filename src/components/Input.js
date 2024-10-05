// src/components/Input.js
import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'; // Optional: Use if you want to add some default styling

const Input = ({
  type = 'text',       // Default to 'text' if not provided
  placeholder = '',    // Placeholder text
  value,               // The value of the input
  onChange,            // Function to call when input changes
  label,               // Optional label for the input
  name,                // Input name
  className = '',      // Custom class names for styling
  ...props             // Any other props you want to pass (e.g., onBlur, onFocus)
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,        // Input type (text, email, password, etc.)
  placeholder: PropTypes.string, // Placeholder text
  value: PropTypes.string,       // The value of the input
  onChange: PropTypes.func.isRequired, // Function that handles change events
  label: PropTypes.string,       // Optional label for input
  name: PropTypes.string.isRequired,   // Name of the input field
  className: PropTypes.string,   // Optional custom class for styling
};

export default Input;
