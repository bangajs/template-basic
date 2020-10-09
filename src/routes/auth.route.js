const router = require("express").Router();
const upload = require("./../middlewares/multer.middleware")
const UserCtrl = require("./../controllers/user.controller");

router.post("/", upload("image"),  UserCtrl.create);
router.post("/login", UserCtrl.login);
router.post("/verify-email", UserCtrl.login);
router.post("/resend-verification-email", UserCtrl.login);

module.exports = router