// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signature from './pages/Signature/Signature';
import InfoAdder from './pages/InfoAdder/InfoAdder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfoAdder />} />
        <Route path="/user-details" element={<Signature />} />
      </Routes>
    </Router>
  );
}

export default App;
