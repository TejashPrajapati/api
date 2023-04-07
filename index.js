const express = require("express");

const mongoose = require("mongoose");
const app = express();
// ADD THIS
var cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
const sliderRoute = require("./routes/slider");
const manRoute = require("./routes/mansalon");
const womanRoute = require("./routes/womansalon");
const aboutpageRoute = require("./routes/aboutpage");
const spaRoute = require("./routes/spa");
const electricianRoute = require("./routes/electrician");
const massageRoute = require("./routes/massage");
const adminRoute = require("./routes/adminlog");
// const adminAuthRoute = require("./routes/adminAuth")
const searchbarRoute = require("./routes/searchbar");
const womanSpaRoute = require("./routes/womanspa");
const DisinfectionRoute = require("./routes/disinfection");
const BathroomRoute = require("./routes/kitchenandbathroom");
const FullhomecleaningRoute = require("./routes/fullhomecleaning");
const ApplianceRoute = require("./routes/appliancerepair");
const PlumberRoute = require("./routes/plumbers");
const CarpenterRoute = require("./routes/carpenters");
const BookingRoute = require("./routes/booking");

//USr=er
const usersRoute = require("./routes/users");

const authRoute = require("./routes/auth");

const wishlistRoute = require("./routes/wishlist");

const PORT = 4000;

dotenv.config();

const bodyParser = require("body-parser");
const Searchbar = require("./models/Searchbar");

const requireToken = require("./Middlewares/AuthTokenReqired");
// require('./db');

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());

app.use(express.json());

// app.post('/register',(req,res)=> {
//   res.send("the signup page")
// })

app.get("/", requireToken, (req, res) => {
  console.log(req.auth);
  res.send(req.auth);
});

app.use(authRoute);
app.use("/api/sliders", sliderRoute);
app.use("/api/admin", adminRoute);

app.use("/api/aboutpage", aboutpageRoute);
app.use("/api/mansalon", manRoute);
app.use("/api/womansalon", womanRoute);
app.use("/api/spa", spaRoute);
app.use("/api/electrician", electricianRoute);
app.use("/api/massage", massageRoute);
app.use("/api/searchbar", searchbarRoute);
app.use("/api/womanspa", womanSpaRoute);
app.use("/api/disinfection", DisinfectionRoute);
app.use("/api/bathroom", BathroomRoute);
app.use("/api/homecleaning", FullhomecleaningRoute);
app.use("/api/appliance", ApplianceRoute);
app.use("/api/plumber", PlumberRoute);
app.use("/api/carpenter", CarpenterRoute);
app.use("/api/booking", BookingRoute);

app.use("/api/users", usersRoute);

app.use("/api/wishlist", wishlistRoute);
// app.use("/api/loguser",loguserRoute)

app.listen(PORT, () => {
  console.log(`Server is running  on port ${PORT}`);
});
