const router = require("express").Router();
const UserCtrl = require("./../controllers/user.controller");
const auth = require('./../middlewares/auth.middleware');
const upload = require("./../middlewares/multer.middleware")
const { role } = require("./../configs/default.config")


router.post("/", upload("image"), UserCtrl.create);
router.post("/login", UserCtrl.login);
router.post("/verify-email", UserCtrl.login);
router.post("/resend-verification-email", UserCtrl.login);

router.get("/", auth(role.USER), UserCtrl.getAll);
router.get("/:userId", auth(role.USER), UserCtrl.getOne);

router.put("/:userId", auth(role.USER), UserCtrl.update);

router.delete("/:userId", auth(role.USER), UserCtrl.delete);


module.exports = router