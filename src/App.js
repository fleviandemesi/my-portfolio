import logo from './logo.svg';
import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Projects from './components/myprojects/Projects';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>

  );
}

export default App;
