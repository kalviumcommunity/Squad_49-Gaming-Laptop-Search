const mongoose = require('mongoose');

const laptopsSchema = new mongoose.Schema({
    Username:String,
    ModelName: String,
    Processor: String,
    Ram: String,
    Storage: String,
    InternalGraphicCard: String,                
    Price: String,
    ImageLink: String
});

const Laptop= mongoose.model('laptop', laptopsSchema);
module.exports = Laptop;

