import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import './CarDetailsPage.css';

function CarDetailsPage() {
  const { id } = useParams(); // Récupère l'ID de la voiture depuis l'URL
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await api.get(`/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des détails de la voiture", error);
      }
    };
    fetchCar();
  }, [id]);

  if (!car) return <div>Chargement des détails...</div>;

  return (
    <div className="car-details">
      <h2>{car.name}</h2>
      <p><strong>Marque:</strong> {car.brand}</p>
      <p><strong>Année:</strong> {car.year}</p>
      <p><strong>Prix de location:</strong> ${car.rentalPrice}</p>
      <p><strong>Disponible:</strong> {car.available ? 'Oui' : 'Non'}</p>
      <Link to="/" className="button back">Retour à la liste</Link>
    </div>
  );
}

export default CarDetailsPage;
