const JWT = require("jsonwebtoken");
const User = require("./../models/user.model");
const CustomError = require("./../utils/custom-error");
const { role } = require("./../configs/default.config")

/**
 * If no role is passed the default role is user
 * 
 * @param  {any[]} roles List of roles allowed to access the route
 */
function auth(...roles) {
     roles = roles.length > 0 ? roles : role.USER

     return async (req, res, next) => {
          if (!req.headers.authorization) throw new CustomError("Unauthorized access: Token not found", 401);

          const token = req.headers.authorization.split(" ")[1];
          const decoded = JWT.verify(token, process.env.JWT_SECRET);

          let user = await User.findOne({ _id: decoded.id });
          if (!user || !user.isActive) throw new CustomError("Unauthorized access: User has been deactivated", 401);
          if (!roles.includes(result.role)) throw new CustomError("Unauthorized access", 401)

          req.$user = user;

          next();
     }
}

module.exports = auth