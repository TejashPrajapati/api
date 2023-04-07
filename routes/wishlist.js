const router = require("express").Router();
const Wishlist = require("../models/Wishlist")

//CREATE electrician
router.post("/", async (req, res) => {
    const wishlist = new Wishlist(req.body);
    try {
      const wishlistData = await wishlist.save();
      res.status(200).json(wishlistData);
    } catch (error) {
      res.status(500).json(error);
    }
  
  });
  router.delete("/:id", async (req, res) => {
    try {
      await Wishlist.findByIdAndDelete(req.params.id);
      res.status(200).json(" Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.get("/", async (req, res) => {
    try {
      const wishlist = await Wishlist.find();
      res.status(200).json(wishlist);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  module.exports = router;