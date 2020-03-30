const User = require("../models/user");
const CustomError = require("../helpers/CustomError");

class UserService {
  async addUser(data) {
    const user = new User(data);
    return user.save();
  }

  async getUsers() {
    return await User.find({});
  }

  async getUser(userId) {
    return await User.findOne({ _id: userId });
  }

  async editUser(userId, data) {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      new: true,
    });

    if (!user) throw new CustomError("user dosen't exist", 404);

    return user;
  }

  async deleteUser(userId) {
    return await User.findOneAndRemove({ _id: userId });
  }
}

module.exports = new UserService();
