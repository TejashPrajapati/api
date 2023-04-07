const router = require("express").Router();
const newadmin = require("../models/Adminlog")

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
// router.get("/login", async (req,res) => {
//   res.json({test: "Ok"})
// })
// Register
router.post("/register", async (req, res) => {
  const newAdmin = new newadmin({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.JWT_SECRET
    ).toString(),
  });

  try {
    const admin = await newAdmin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const admin = await newadmin.findOne({ email: req.body.email });

    if (!admin) {
      return res.status(401).json("Wrong username or password");
    }

    const originalPassword = CryptoJS.AES.decrypt(
      admin.password,
      process.env.JWT_SECRET
    ).toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong username or password");
    }

    const accessToken = jwt.sign(
      { id: admin._id, isAdmin: admin.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { password, ...info } = admin._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;