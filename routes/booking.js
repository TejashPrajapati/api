const router = require("express").Router();
const Booking = require("../models/Booking")

//CREATE electrician
router.post("/", async (req, res) => {
    const booking = new Booking(req.body);
    try {
      const bookingData = await booking.save();
      res.status(200).json(bookingData);
    } catch (error) {
      res.status(500).json(error);
    }
  
  });
  router.delete("/:id", async (req, res) => {
    try {
      await Booking.findByIdAndDelete(req.params.id);
      res.status(200).json(" Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.get("/", async (req, res) => {
    try {
      const booking = await Booking.find();
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  module.exports = router;