const router = require("express").Router();
const UserCtrl = require("../controllers/UserController");

const { Authorize } = require('../middlewares/auth')

module.exports = function () {
  router.post("/", UserCtrl.add);
  router.post("/auth", UserCtrl.authenticate);
  router.post("/verify/verifyId", UserCtrl.verifyMail);

  router.get("/", Authorize(), UserCtrl.getMany);
  router.get("/count", Authorize(), UserCtrl.count);
  router.get("/:userId", Authorize(), UserCtrl.getById);

  router.put("/:userId", Authorize(), UserCtrl.update);

  router.delete("/:userId", Authorize(), UserCtrl.delete);

  return router;
};
