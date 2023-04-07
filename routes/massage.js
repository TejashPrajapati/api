const router = require("express").Router();
const Massage = require("../models/Massage")

//CREATE Spa
router.post("/", async (req, res) => {
  const massage = new Massage(req.body);
  try {
    const spaMassage = await massage.save();
    res.status(200).json(spaMassage);
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

//GET ALL Spa
router.get("/", async (req, res) => {
  try {
    const massage = await Massage.find();
    res.status(200).json(massage);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
