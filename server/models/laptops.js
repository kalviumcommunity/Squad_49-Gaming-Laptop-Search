const mongoose = require('mongoose');

const laptopsSchema = new mongoose.Schema({
    sno: Number,
    modelName: String,
    processor: String,
    ram: String,
    storage: String,
    internalGraphicCard: String,
    price: String
});

const Laptop= mongoose.model('laptops', laptopsSchema);
module.exports = Laptop;