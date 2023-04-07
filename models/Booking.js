const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    name:{type: String},
    rating: {type: String},
    price: {type: String},
    offer: {type: String},
    discription: {type: String}
})

module.exports = mongoose.model("Booking", BookingSchema);