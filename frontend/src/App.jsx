import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetailsPage from './pages/CarDetailsPage';
import CarUpdatePage from './pages/CarUpdatePage';
import './index.css';
import AddCarPage from './pages/AddCarPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
        <Route path="/update-car/:id" element={<CarUpdatePage />} />
        <Route path="/add-car" element={<AddCarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
