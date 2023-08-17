const mongoose = require('mongoose')

var RobotSchema = mongoose.Schema({
    name: String,
    brandName: String,
    image: String,
    quantity: Number,
    price : Number
})

const RobotModel = mongoose.model("robot", RobotSchema, "robot")

module.exports = RobotModel