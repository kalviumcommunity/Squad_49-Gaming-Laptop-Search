const mongoose = require('mongoose');

const laptopsSchema = new mongoose.Schema({
    sno: Number,
    modelName: String,
    processor: String,
    ram: String,
    storage: String,
    internalGraphicCard: String,
    price: String,
    imageLink: String
});

const Laptop= mongoose.model('laptop', laptopsSchema);
module.exports = Laptop;