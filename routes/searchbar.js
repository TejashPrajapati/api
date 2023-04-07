const router = require("express").Router();
const Searchbar = require("../models/Searchbar")

//CREATE Searchbar
router.post("/", async (req, res) => {
  const searchbar = new Searchbar(req.body);
  try {
    const saveSearchBar = await searchbar.save();
    res.status(200).json(saveSearchBar);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //DELETE Spa
// router.delete("/:id", async (req, res) => {
//   try {
//     await Spa.findByIdAndDelete(req.params.id);
//     res.status(200).json(" Deleted");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // GET SINGLE Spa
// router.get("/:id", async (req, res) => {
//   try {
//     const slider = await Spa.findById(req.params.id);
//     res.status(200).json(slider);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

//GET ALL SEARCHBAR
router.get("/", async (req, res) => {
  try {
    const searchbar = await Searchbar.find();
    res.status(200).json(searchbar);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
