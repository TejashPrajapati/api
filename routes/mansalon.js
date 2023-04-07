const router = require("express").Router();
const Mansalon = require("../models/Mansalon");

//CREAT SALON PAKAGE

router.post("/", async (req, res) => {
  const mansalon = new Mansalon(req.body);
  try {
    const savedOffer = await mansalon.save();
    res.status(200).json(savedOffer);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE SALONPKG
router.delete("/:Id", async (req, res) => {
  try {
    await Mansalon.findByIdAndDelete(req.params.Id);
    res.status(200).json("Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL PKG
router.get("/", async (req, res) => {
  try {
    const mansalons = await Mansalon.find();
    res.status(200).json(mansalons);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, resp) => {
  let result = await Mansalon.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
});

module.exports = router;
