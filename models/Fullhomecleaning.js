const mongoose = require("mongoose");

const FullhomeSchema = new mongoose.Schema({
    name: {type: String},
    rating: {type: String},
    price: {type: String},
    offer: {type: String},
    description: {type: String}
})

module.exports = mongoose.model("Fullhomecleaning", FullhomeSchema);