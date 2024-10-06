// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signature from './pages/Signature/Signature';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-details" element={<Signature />} />
      </Routes>
    </Router>
  );
}

export default App;
