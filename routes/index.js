const router = require("express").Router();
const userRoutes = require("./userRoutes");
const doctorRoutes = require("./doctorRoutes");
const appointmentRoutes = require("./appointmentRoutes");
const specializationRoutes = require("./specializationRoutes");
const symptomRoutes = require("./symptomRoutes");

module.exports = function(app) {
  router.get("/test", (req, res) => {
    res.send("yehh!");
  });
  router.use("/users", userRoutes());
  router.use("/doctors", doctorRoutes());
  router.use("/appointments", appointmentRoutes());
  router.use("/specializations", specializationRoutes());
  router.use("/symptoms", symptomRoutes());

  return router;
};
