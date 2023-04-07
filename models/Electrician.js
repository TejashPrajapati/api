const mongoose = require("mongoose");

const ElectricianSchema = new mongoose.Schema({
    name:{type: String},
    rating: {type: String},
    price: {type: String},
    offer: {type: String},
    discription: {type: String}
})

module.exports = mongoose.model("Electrician", ElectricianSchema);