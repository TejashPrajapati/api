const router = require("express").Router();
const Auth = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await Auth.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
