const router = require("express").Router();
const UserCtrl = require("./../controllers/user.controller");
const auth = require('./../middlewares/auth.middleware');
const upload = require("./../middlewares/multer.middleware")
const { role } = require("../config")

//route - POST:: user/
//desc - Create a new user
//access - Public
router.post("/", upload("image"), UserCtrl.create);

//route - POST:: user/login
//desc - Login a user
//access - Public
router.post("/login", UserCtrl.login);

//route - POST:: user/
//desc - Create a new user
//access - Public
router.post("/request-email-verification", UserCtrl.RequestEmailVerification);
router.post("/verify-email", UserCtrl.VerifyEmail);
router.post("/request-password-reset", UserCtrl.login);
router.post("/reset-password", UserCtrl.login);

router.get("/", auth(role.USER), UserCtrl.getAll);
router.get("/:userId", auth(role.USER), UserCtrl.getOne);

router.put("/:userId", auth(role.USER), UserCtrl.update);

router.delete("/:userId", auth(role.USER), UserCtrl.delete);


module.exports = router