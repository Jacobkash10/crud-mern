import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import './CarDetailsPage.css';

function CarDetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const response = await api.get(`/${id}`);
      setCar(response.data);
    };
    fetchCar();
  }, [id]);

  if (!car) return <div>Chargement...</div>;

  return (
    <div className="car-details">
      <h2>{car.name}</h2>
      <p>Marque: {car.brand}</p>
      <p>Année: {car.year}</p>
      <p>Prix de location: ${car.rentalPrice}</p>
      <Link to="/" className="button back">Retour à la liste</Link>
    </div>
  );
}

export default CarDetailsPage;
