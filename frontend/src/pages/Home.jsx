import React from 'react';
import CarList from '../components/CarList';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Location de Voitures</h1>
      <Link to="/add-car" className="button add">Ajouter une voiture</Link>
      <CarList />
    </div>
  );
}

export default Home;
