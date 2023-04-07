const mongoose = require("mongoose");

const MassageSchema = new mongoose.Schema({
    image:{type: String},
    title: {type: String},
    rating: {type: String},
    price: {type: String},
    discription: {type: String}
})

module.exports = mongoose.model("Massage", MassageSchema);