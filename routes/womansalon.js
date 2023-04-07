const router = require("express").Router();
const WomanSalon = require("../models/Womansalon" )



//CREATE OFFER
router.post("/", async (req, res) => {
    const womanSalon = new WomanSalon(req.body);
    try {
      const savedPkg = await womanSalon.save();
      res.status(200).json(savedPkg);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //DELETE OFFER

router.delete("/:Id", async (req, res) => {
    try {
      await WomanSalon.findByIdAndDelete(req.params.Id);
      res.status(200).json("Offer Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //GET ALL OFFERS
router.get("/", async (req, res) => {
    try {
      const womanSalon = await WomanSalon.find();
      res.status(200).json(womanSalon);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.put("/:id", async (req, resp) => {
    let result = await WomanSalon.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    resp.send(result)
})
  


  module.exports = router;