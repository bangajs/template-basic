const JWT = require("jsonwebtoken");
const User = require("./../models/user.model");
const CustomError = require("./../utils/custom-error");

function auth(...roles) {
     return async (req, res, next) => {
          if (!req.headers.authorization) throw new CustomError("Token not found", 401);

          const token = req.headers.authorization.split(" ")[1];
          const decoded =  JWT.verify(token, process.env.JWT_SECRET);

          let user = await User.findOne({ _id: decoded.id });
          if (!user || !user.isActive) throw new CustomError("Unauthorized user", 401);
          if (!roles.includes(result.role)) throw new CustomError("You don't have authorization to access the requested resource", 401)

          req.$user = user;

          next();
     }
}

module.exports = auth