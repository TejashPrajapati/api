const mongoose = require("mongoose");

const SearchbarSchema = new mongoose.Schema({
    title:{type: String},
    
    rating: {type: String},
    
    
})

module.exports = mongoose.model("Searchbar", SearchbarSchema);