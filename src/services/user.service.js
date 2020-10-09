const JWT = require("jsonwebtoken")
const User = require("./../models/user.model");
const CustomError = require("./../utils/custom-error");

class UserService {
  async create(data) {
    let user = await User.findOne({ email: data.email })
    if (user) throw new CustomError("Email already exists");

    console.log(data)

    user = new User(data);
    const token = JWT.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    await user.save();

    return data = {
      uid: user._id,
      email: user.email,
      role: user.role,
      token: token
    };
  }

  async login(data) {
    if (!data.email) throw new CustomError("Email is required");
    if (!data.password) throw new CustomError("Password is required");

    // Check if user exist
    const user = await User.findOne({ email: data.email });
    if (!user) throw new CustomError("Incorrect email or password");

    //Check if user password is correct
    const isCorrect = await bcrypt.compare(data.password, user.password)
    if (!isCorrect) throw new CustomError("Incorrect email or password");

    const token = await jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

    return data = {
      uid: user._id,
      email: user.email,
      role: user.role,
      token: token
    };
  }

  async getAll() {
    return await User.find({}, { password: 0, __v: 0 });
  }

  async getOne(userId) {
    return await User.findOne({ _id: userId }, { password: 0, __v: 0 });
  }

  async update(userId, data) {
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { $set: data },
      { new: true }
    );

    if (!user) throw new CustomError("User dosen't exist", 404);

    return user;
  }

  async delete(userId) {
    const user = await User.findOne({ _id: userId });
    user.remove()
    return user
  }

  async sendVerificationMail(){

  }

  async resetPassword(){
     
  }
}

module.exports = new UserService();
