const express = require('express');
const Car = require('../models/Car');
const router = express.Router();

// Créer une voiture
router.post('/', async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Lire toutes les voitures
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lire une seule voiture
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) throw new Error('Voiture non trouvée');
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Mettre à jour une voiture
router.put('/:id', async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Supprimer une voiture
router.delete('/:id', async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
