
import { HashRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home.js';
import { Layout } from './Layout.js'
import { keepTheme } from './utils/themes';
import { useEffect } from 'react';
import Header from './components/Header.js';
import React, { Component } from 'react';
import Gallery from './pages/Gallery.js';
import NoPage from './pages/NoPage.js';
import Trips from './pages/Trips.js';


function App() {
  useEffect(() => {
    keepTheme();
  })

  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
