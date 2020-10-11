const UserServ = require("./../services/user.service");
const response = require("./../utils/response");

class UserContoller {
  async create(req, res) {
    const result = await UserServ.create(req.body);
    res.status(201).send(response("User created", result));
  }

  async login(req, res) {
    const result = await UserServ.login(req.body);
    res.status(200).send(response("User login successful", result));
  }

  async getAll(req, res) {
    const result = await UserServ.getAll();
    res.status(200).send(response("All users", result));
  }

  async getOne(req, res) {
    const result = await UserServ.getOne(req.params.userId);
    res.status(200).send(response("User data", result));
  }

  async update(req, res) {
    const result = await UserServ.update(req.params.userId, req.body);
    res.status(200).send(response("User updated", result));
  }

  async updatePassword(req, res) {
    const result = await UserServ.updatePassword(req.params.userId, req.body);
    res.status(200).send(response("Password updated", result));
  }

  async delete(req, res) {
    const result = await UserServ.delete(req.params.userId);
    res.status(200).send(response("User deleted", result));
  }

  async RequestEmailVerification(req, res) {
    const result = await UserServ.RequestEmailVerification(req.query.email);
    res.status(200).send(response("Email verfication link sent", result));
  }

  async VerifyEmail(req, res) {
    const result = await UserServ.VerifyEmail(req.body);
    res.status(200).send(response("Email verified successfully", result));
  }

  async RequestPasswordReset(req, res) {
    const result = await UserServ.RequestPasswordReset(req.query.email);
    res.status(200).send(response("Password reset link sent", result));
  }
  async resetPassword(req, res) {
    const result = await UserServ.resetPassword(req.params.userId);
    res.status(200).send(response("User deleted", result));
  }
}

module.exports = new UserContoller();
