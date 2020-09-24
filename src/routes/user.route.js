const router = require("express").Router();
const UserCtrl = require("../controllers/user.controller");
const auth = require('../middlewares/auth.middleware');


router.post("/", UserCtrl.create);
router.post("/login", UserCtrl.login);

router.get("/", auth(), UserCtrl.getMany);
router.get("/:userId", auth(), UserCtrl.getById);

router.put("/:userId", auth(), UserCtrl.update);

router.delete("/:userId", auth(), UserCtrl.delete);


module.exports = router