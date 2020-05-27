const router = require("express").Router();
const UserCtrl = require("../controllers/UserController");

const { Roles } = require("../config/constants")
const { Authorize } = require('../middlewares/auth')

module.exports = function () {
  router.post("/", UserCtrl.add);
  router.post("/auth", UserCtrl.authenticate);
  router.post("/verify/verifyId", UserCtrl.verifyMail);

  router.get("/", Authorize([Roles.ADMIN]), UserCtrl.getMany);
  router.get("/count", Authorize([Roles.ADMIN]), UserCtrl.count);
  router.get("/:userId", Authorize([Roles.ADMIN, Roles.USER]), UserCtrl.getById);

  router.put("/:userId", Authorize([Roles.ADMIN, Roles.USER]), UserCtrl.update);

  router.delete("/:userId", Authorize([Roles.ADMIN]), UserCtrl.delete);

  return router;
};
