const mongoose = require("mongoose");

const SpaSchema = new mongoose.Schema({
    name: {type: String},
    rating: {type: String},
    price: {type: String},
    discription: {type: String}
})

module.exports = mongoose.model("Spa", SpaSchema);