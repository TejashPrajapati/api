const router = require("express").Router();
const Slider = require("../models/Slider");

//CREATE Slider
router.post("/", async (req, res) => {
  const slider = new Slider(req.body);
  try {
    const savedSlider = await slider.save();
    res.status(200).json(savedSlider);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE Slider
router.delete("/:id", async (req, res) => {
  try {
    await Slider.findByIdAndDelete(req.params.id);
    res.status(200).json("Slider Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET SINGLE Slider
router.get("/:id", async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    res.status(200).json(slider);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL SliderS
router.get("/", async (req, res) => {
  try {
    const sliders = await Slider.find();
    res.status(200).json(sliders);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
