const mongoose = require('mongoose')

var LegoSchema = mongoose.Schema({
    name: String,
    brandName: String,
    image: String,
    quantity: Number,
    price : Number
})

const LegoModel = mongoose.model("lego", LegoSchema, "lego")

module.exports = LegoModel