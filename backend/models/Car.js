const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, required: true },
  rentalPrice: { type: Number, required: true },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Car', carSchema);