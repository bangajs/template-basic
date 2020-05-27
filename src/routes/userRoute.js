const router = require("express").Router();
const {
  addUser,
  getUsers,
  getUser,
  deleteUser,
  editUser,
} = require("../controllers/UserController");

module.exports = function () {
  router.post("/", addUser);
  router.get("/", getUsers);
  router.get("/:userId", getUser);
  router.put("/:userId", editUser);
  router.delete("/:userId", deleteUser);

  return router;
};
