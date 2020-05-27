const jwt = require("jsonwebtoken");
const User = require("../models/User");
const CustomError = require("../helpers/CustomError");

module.exports.authorize = (roles = []) => {
     return async (req, res, next) => {
          const token = req.headers.authorization;
          const decoded = await jwt.verify(token, process.env.JWT_SECRET);
          let user = await User.findOne({ _id: decoded.id });

          //check if user exists and is active
          if (!user || !user.isActive) throw new CustomError("unauthorized user", 401);

          //check if user has permission
          if (roles.length && !roles.includes(user.role)) throw new CustomError("unauthorized user", 401);

          //save decoded toeknt to request object
          req.user = decoded;

          next();
     }
}