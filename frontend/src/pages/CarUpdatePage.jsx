import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Remplacez useHistory par useNavigate
import api from '../api';
import './CarUpdatePage.css';

function CarUpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Utilisez useNavigate
  const [car, setCar] = useState({ name: '', brand: '', year: '', rentalPrice: '' });

  useEffect(() => {
    const fetchCar = async () => {
      const response = await api.get(`/${id}`);
      setCar(response.data);
    };
    fetchCar();
  }, [id]);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/${id}`, car);
    navigate('/'); // Remplacez history.push('/') par navigate('/')
  };

  return (
    <div className="car-update">
      <h2>Mettre à jour la voiture</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={car.name} onChange={handleChange} placeholder="Nom" required />
        <input type="text" name="brand" value={car.brand} onChange={handleChange} placeholder="Marque" required />
        <input type="number" name="year" value={car.year} onChange={handleChange} placeholder="Année" required />
        <input type="number" name="rentalPrice" value={car.rentalPrice} onChange={handleChange} placeholder="Prix de location" required />
        <button type="submit" className="button update">Enregistrer</button>
      </form>
    </div>
  );
}

export default CarUpdatePage;
