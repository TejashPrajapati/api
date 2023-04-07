const mongoose = require("mongoose");

const AboutpageSchema = new mongoose.Schema({
  image: { type: String },
  name: { type: String },
  email: { type: String, unique: true, required: true },
  phonenumber: { type: String },
  message: { type: String },
});

module.exports = mongoose.model("Aboutpage", AboutpageSchema);
