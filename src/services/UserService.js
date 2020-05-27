const User = require("../models/user");
const CustomError = require("../helpers/CustomError");

class UserService {
  async add(data) {
    const user = new User(data);
    return user.save();
  }

  async getMany() {
    return await User.find({});
  }

  async getById(userId) {
    return await User.findOne({ _id: userId });
  }

  async update(userId, data) {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      new: true,
    });

    if (!user) throw new CustomError("user dosen't exist", 404);

    return user;
  }

  async delete(userId) {
    return await User.findOneAndRemove({ _id: userId });
  }
}

module.exports = new UserService();
