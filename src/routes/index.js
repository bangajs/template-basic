const router = require("express").Router();
const userRoute = require("./userRoute");
const authRoute = require("./authRoute");


router.get("/ping", (req, res) => res.send("Yeah it works!"));

router.use("/users", userRoute);



module.exports = router