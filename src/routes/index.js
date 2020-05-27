const router = require("express").Router();
const userRoutes = require("./userRoute");

module.exports = function() {

  router.get("/test", (req, res) => res.send("Yeah it works!"));                                                                                                                                                                                                                                 
  router.use("/users", userRoutes());

  return router;
};
