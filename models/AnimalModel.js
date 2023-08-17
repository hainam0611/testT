const mongoose = require('mongoose');

var AnimalSchema = mongoose.Schema({
    name: String,
    brandName: String,
    image: String,
    quantity: Number,
    price : Number
});

const AnimalModel = mongoose.model("animal", AnimalSchema, "animal");

module.exports = AnimalModel;