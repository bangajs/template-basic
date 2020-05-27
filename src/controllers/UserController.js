const {
  addUser,
  getUsers,
  getUser,
  deleteUser,
  editUser,
} = require("../services/UserService");

const { response } = require("../helpers/Message");
const CustomError = require('../helpers/CustomError')

class UserContoller {
  async addUser(req, res) {
    const data = await addUser(req.body);
    res.status(201).send(response("user created", data));
  }

  async getUsers(req, res) {
    const data = await getUsers();
    res.status(200).send(response("all users", data));
  }

  async getUser(req, res) {
    const data = await getUser(req.params.userId);
    res.status(200).send(response("user data", data));
  }

  async editUser(req, res) {
    const data = await editUser(req.params.userId, req.body);
    res.status(200).send(response("user edited", data));
  }

  async deleteUser(req, res) {
    const data = await deleteUser(req.params.userId);
    res.status(200).send(response("user deleted", data));
  }
}

module.exports = new UserContoller();
