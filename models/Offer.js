const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    title: {type: String},
    image: { type: String },
})


module.exports = mongoose.model("Service", OfferSchema);