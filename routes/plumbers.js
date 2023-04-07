const router = require("express").Router();
const Plumber = require("../models/Plumbers");

//CREATE Spa
router.post("/", async (req, res) => {
  const plumber = new Plumber(req.body);
  try {
    const savedPlumber = await plumber.save();
    res.status(200).json(savedPlumber);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE Spa
router.delete("/:id", async (req, res) => {
  try {
    await Plumber.findByIdAndDelete(req.params.id);
    res.status(200).json(" Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET SINGLE Spa
router.get("/:id", async (req, res) => {
  try {
    const slider = await Plumber.findById(req.params.id);
    res.status(200).json(slider);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL Spa
router.get("/", async (req, res) => {
  try {
    const plumber = await Plumber.find();
    res.status(200).json(plumber);
  } catch (error) {
    res.status(500).json(error);
  }
});
  
// Update spa
router.put("/:id", async (req, resp) => {
  let result = await Plumber.updateOne(
    { _id: req.params.id },
    {
      $set: req.body, 
    }
  );
  resp.send(result);
});

module.exports = router;
