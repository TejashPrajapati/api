const router = require("express").Router();
const Womanspa = require("../models/WomanSpa");

//CREATE Spa
router.post("/", async (req, res) => {
  const womanspa = new Womanspa(req.body);
  try {
    const savedSpa = await womanspa.save();
    res.status(200).json(savedSpa);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE Spa
router.delete("/:id", async (req, res) => {
  try {
    await Womanspa.findByIdAndDelete(req.params.id);
    res.status(200).json(" Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET SINGLE Spa
router.get("/:id", async (req, res) => {
  try {
    const slider = await Womanspa.findById(req.params.id);
    res.status(200).json(slider);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL Spa
router.get("/", async (req, res) => {
  try {
    const womanspa = await Womanspa.find();
    res.status(200).json(womanspa);
  } catch (error) {
    res.status(500).json(error);
  }
});
  
// Update spa
router.put("/:id", async (req, resp) => {
  let result = await Womanspa.updateOne(
    { _id: req.params.id },
    {
      $set: req.body, 
    }
  );
  resp.send(result);
});

module.exports = router;
