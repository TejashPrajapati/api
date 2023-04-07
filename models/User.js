const mongoose = require('mongoose');

const bcrypt = require("bcrypt");

// const UserSchema = new mongoose.Schema({
//     username: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     password: {type: String, required: true},
    
// })

// mongoose.model("User", UserSchema);

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true

    },
    dob: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    wishlist:{
        type: Array,
        required: false
    }

})

authSchema.pre('save', async function (next) {
    const auth = this;
    console.log("Just before saving before hashing  ", auth.password);
    if (!auth.isModified('password')) {
        return next();
    }
    auth.password = await bcrypt.hash(auth.password, 8);
    console.log("Just before saving & after hashing", auth.password);
    next();
})

module.exports = mongoose.model("Auth", authSchema);