const UserService = require("./../services/user.service");
const response = require("../utils/response");

class UserContoller {
  async create(req, res) {
    const data = await UserService.create(req.body);
    res.status(201).send(response("user created", data));
  }

  async login(req, res) {
    const data = await login(req.body);
    res.status(200).send(response("User signed in", data));
  }

  async getMany(req, res) {
    const data = await UserService.getById();
    res.status(200).send(response("Users", data));
  }

  async getById(req, res) {
    const data = await UserService.getById(req.params.userId);
    res.status(200).send(response("User", data));
  }

  async update(req, res) {
    const data = await UserService.update(req.params.userId, req.body);
    res.status(200).send(response("User updated", data));
  }

  async delete(req, res) {
    const data = await UserService.deleteOne(req.params.userId);
    res.status(200).send(response("User deleted", data));
  }
}

module.exports = new UserContoller();
