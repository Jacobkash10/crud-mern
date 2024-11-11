import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import './CarList.css';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await api.get('/');
      setCars(response.data);
    };
    fetchCars();
  }, []);

  const deleteCar = async (id) => {
    await api.delete(`/${id}`);
    setCars(cars.filter((car) => car._id !== id));
  };

  return (
    <div className="car-list">
      <h1>Liste des voitures</h1>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <h3>{car.name}</h3>
            <p>{car.brand} - {car.year}</p>
            <p>Prix de location: ${car.rentalPrice}</p>
            <div className="buttons">
              <Link to={`/car/${car._id}`} className="button details">Détails</Link>
              <Link to={`/update-car/${car._id}`} className="button update">Mettre à jour</Link>
              <button onClick={() => deleteCar(car._id)} className="button delete">Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
