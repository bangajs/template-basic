const router = require("express").Router();
const userRoute = require("./userRoute");
const authRoute = require("./authRoute");


router.get("/test", (req, res) => res.send("Yeah it works!"));

router.use("/users", userRoute);
router.use("/auth", authRoute)



module.exports = router