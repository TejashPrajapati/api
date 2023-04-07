const router = require("express").Router();
const Carpenter = require("../models/Carpenters");

//CREATE Spa
router.post("/", async (req, res) => {
  const carpenter = new Carpenter(req.body);
  try {
    const savedCarpenter = await carpenter.save();
    res.status(200).json(savedCarpenter);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE Spa
router.delete("/:id", async (req, res) => {
  try {
    await Carpenter.findByIdAndDelete(req.params.id);
    res.status(200).json(" Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET SINGLE Spa
router.get("/:id", async (req, res) => {
  try {
    const slider = await Carpenter.findById(req.params.id);
    res.status(200).json(slider);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL Spa
router.get("/", async (req, res) => {
  try {
    const carpenter = await Carpenter.find();
    res.status(200).json(carpenter);
  } catch (error) {
    res.status(500).json(error);
  }
});
  
// Update spa
router.put("/:id", async (req, resp) => {
  let result = await Carpenter.updateOne(
    { _id: req.params.id },
    {
      $set: req.body, 
    }
  );
  resp.send(result);
});

module.exports = router;
