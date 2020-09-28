const router = require("express").Router();
const UserCtrl = require("./../controllers/user.controller");
const auth = require('./../middlewares/auth.middleware');
const {p} = require("./../configs/default.config")


router.post("/", UserCtrl.create);
router.post("/login", UserCtrl.login);

router.get("/", auth(), UserCtrl.getAll);
router.get("/:userId", auth(), UserCtrl.getOne);

router.put("/:userId", auth(), UserCtrl.update);

router.delete("/:userId", auth(), UserCtrl.delete);


module.exports = router