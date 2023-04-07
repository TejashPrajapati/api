const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
    name:{type: String},
    rating: {type: String},
    price: {type: String},
    offer: {type: String},
    discription: {type: String}
})

module.exports = mongoose.model("Wishlist", WishlistSchema);