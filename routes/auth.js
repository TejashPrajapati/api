
const router = require("express").Router();
const  mongoose  = require("mongoose");
const Auth = require("../models/User")
const jwt = require("jsonwebtoken");



const bcrypt = require("bcrypt");



//CREATE electrician
router.post("/signup", async (req, res) => {
 
  const { name, email, password, dob, address } =req.body;
    if(!email || !password || !name || !dob || !address) {
      return res.status(422).send({ error: "Please fill all the fields"});
    }
    
  const auth = new Auth(req.body);
  try {
    const authData = await auth.save();
    const token = jwt.sign({_id: auth._id},process.env.JWT_SECRET);
    res.send({ token })
    res.status(200).json(authData);
  } catch (error) {
    res.status(500).json(error);
  }

});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
      return res.status(422).json({ error: "Please add email or password" });
  }
  const auth = await Auth.findOne({ email: email })

  if (!auth) {
      return res.status(422).json({ error: "Invalid Credentials" });
  }

  try {
      bcrypt.compare(password, auth.password, (err, result) => {
          if (result) {
              console.log("Password matched");
              const token = jwt.sign({ _id: auth._id }, process.env.JWT_SECRET);
              res.status(200).json({ token: token, email: auth.email, name: auth.name, id: auth._id });
          }
          else {
              console.log('Password does not match');
              return res.status(422).json({ error: "Invalid Credentials" });
          }
      })
  }
  catch (err) {
      console.log(err);
  }

  // router.get("/api/auth", async (req, res) => {
  //   try {
  //     const auth = await Auth.find();
  //     res.status(200).json(auth);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // });

})

module.exports = router;
