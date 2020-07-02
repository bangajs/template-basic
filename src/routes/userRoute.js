const router = require("express").Router();
const UserCtrl = require("../controllers/UserController");
const auth = require('../middlewares/auth')


router.post("/", UserCtrl.add);
router.post("/auth", UserCtrl.authenticate);

router.get("/", auth(), UserCtrl.getMany);
router.get("/:userId", auth(), UserCtrl.getById);

router.put("/:userId", auth(), UserCtrl.update);

router.delete("/:userId", auth(), UserCtrl.delete);


module.exports = router