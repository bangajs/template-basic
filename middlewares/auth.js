const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");
const CustomError = require("../helpers/CustomError");

module.exports.authorize = (roles = []) => {
  return async (req, res, next) => {
    const decoded = await jwt.verify(req.headers.authorization, "phsDev");

    let user = ""
    if(decoded.role == "admin"){
      user = await Admin.findOne({ _id: decoded.id });
    }else{
      user = await User.findOne({ _id: decoded.id });
    }
    
    //check if user exists and active
    if (!user || !user.isActive) throw new CustomError("unauthorized user", 401);
    //check if user has permission
    if (roles.length && !roles.includes(user.role)) throw new CustomError("unauthorized user", 401);
    //save decoded toeknt to request object
    req.user = decoded;

    next();
  }
}