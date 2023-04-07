const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("Slider", SliderSchema);
