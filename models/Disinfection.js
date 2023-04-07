const mongoose = require("mongoose");

const DisinfectionSchema = new mongoose.Schema({
    name: {type: String},
    rating: {type: String},
    price: {type: String},
    description: {type: String}
})

module.exports = mongoose.model("Disinfection", DisinfectionSchema);