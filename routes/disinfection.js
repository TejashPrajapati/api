const router = require("express").Router();
const Disinfection = require("../models/Disinfection");

//CREATE Spa
router.post("/", async (req, res) => {
  const disinfection = new Disinfection(req.body);
  try {
    const savedDisinfection = await disinfection.save();
    res.status(200).json(savedDisinfection);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE Spa
router.delete("/:id", async (req, res) => {
  try {
    await Disinfection.findByIdAndDelete(req.params.id);
    res.status(200).json(" Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET SINGLE Spa
router.get("/:id", async (req, res) => {
  try {
    const slider = await Disinfection.findById(req.params.id);
    res.status(200).json(slider);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL Spa
router.get("/", async (req, res) => {
  try {
    const disinfection = await Disinfection.find();
    res.status(200).json(disinfection);
  } catch (error) {
    res.status(500).json(error);
  }
});
  
// Update spa
router.put("/:id", async (req, resp) => {
  let result = await Disinfection.updateOne(
    { _id: req.params.id },
    {
      $set: req.body, 
    }
  );
  resp.send(result);
});

module.exports = router;
