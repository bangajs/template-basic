const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Doctor = require("../models/doctor");
const CustomError = require("../helpers/CustomError");

async function isDoctor(req, res, next) {
  const decoded = await jwt.verify(req.header.token, "healthie");

  const doctor = await Doctor.findOne({ _id: decoded.id });

  if (!doctor) throw new CustomError("Doctor dosen't exist");

  if (doctor.role == "doctor") {
    req.headers.doctor = decoded;
    next();
  } else {
    throw new CustomError("Unauthorized user", 401);
  }
}

async function isUser(req, res, next) {
  const decoded = await jwt.verify(req.headers.authtoken, "healthie");

  const user = await User.findOne({ _id: decoded.id });

  if (!user) throw new CustomError("User dosen't exist");

  if (decoded.role == "user") {
    req.headers.user = decoded;
    next();
  } else {
    throw new CustomError("Unauthorized user", 401);
  }
}

module.exports.isDoctor = isDoctor;
module.exports.isUser = isUser;
