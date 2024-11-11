import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './AddCarPage.css';

function AddCarPage() {
  const navigate = useNavigate();
  const [car, setCar] = useState({ name: '', brand: '', year: '', rentalPrice: '' });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/', car);
      navigate('/'); // Redirige vers la page d'accueil après l'ajout de la voiture
    } catch (error) {
      console.error("Erreur lors de l'ajout de la voiture", error);
    }
  };

  return (
    <div className="add-car">
      <h2>Ajouter une nouvelle voiture</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={car.name} onChange={handleChange} placeholder="Nom" required />
        <input type="text" name="brand" value={car.brand} onChange={handleChange} placeholder="Marque" required />
        <input type="number" name="year" value={car.year} onChange={handleChange} placeholder="Année" required />
        <input type="number" name="rentalPrice" value={car.rentalPrice} onChange={handleChange} placeholder="Prix de location" required />
        <button type="submit" className="button add">Ajouter</button>
      </form>
    </div>
  );
}

export default AddCarPage;
