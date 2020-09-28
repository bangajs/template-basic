const UserServ = require("./../services/user.service");
const $res = require("./../utils/response");

class UserContoller {
  async create(req, res) {
    const result = await UserServ.create(req.body);
    res.status(201).send($res("User created", result));
  }

  async login(req, res) {
    const result = await UserServ.login(req.body);
    res.status(200).send($res("User login successful", result));
  }

  async getAll(req, res) {
    const result = await UserServ.get();
    res.status(200).send($res("All users", result));
  }

  async getOne(req, res) {
    const result = await UserServ.getOne(req.params.userId);
    res.status(200).send($res("User data", result));
  }

  async update(req, res) {
    const result = await UserServ.update(req.params.userId, req.body);
    res.status(200).send($res("User updated", result));
  }

  async delete(req, res) {
    const result = await UserServ.delete(req.params.userId);
    res.status(200).send($res("User deleted", result));
  }
}

module.exports = new UserContoller();
