const router = require("express").Router();
const Aboutpage = require("../models/Aboutpage")

//CREATE ABOUTPAGE

router.post("/", async (req, res) => {
    const aboutpage = new Aboutpage(req.body);
    try {
      const savedAbout = await aboutpage.save();
      res.status(200).json(savedAbout);
    } catch (error) {
      res.status(500).json(error);  
    }
  });

  router.get("/", async (req, res) => {
    try {
      const aboutpage = await Aboutpage.find();
      res.status(200).json(aboutpage);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  module.exports = router;