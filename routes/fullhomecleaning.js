const router = require("express").Router();
const Fullhomecleaning = require("../models/Fullhomecleaning");

//CREATE Spa
router.post("/", async (req, res) => {
  const homecleaning = new Fullhomecleaning(req.body);
  try {
    const savedFullhomecleaning = await homecleaning.save();
    res.status(200).json(savedFullhomecleaning);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE Spa
router.delete("/:id", async (req, res) => {
  try {
    await Fullhomecleaning.findByIdAndDelete(req.params.id);
    res.status(200).json(" Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET SINGLE Spa
router.get("/:id", async (req, res) => {
  try {
    const slider = await Fullhomecleaning.findById(req.params.id);
    res.status(200).json(slider);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL Spa
router.get("/", async (req, res) => {
  try {
    const fullhomecleaning = await Fullhomecleaning.find();
    res.status(200).json(fullhomecleaning);
  } catch (error) {
    res.status(500).json(error);
  }
});
  
// Update spa
router.put("/:id", async (req, resp) => {
  let result = await Fullhomecleaning.updateOne(
    { _id: req.params.id },
    {
      $set: req.body, 
    }
  );
  resp.send(result);
});

module.exports = router;
