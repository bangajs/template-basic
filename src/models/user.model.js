const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { roles } = require("../configs/default.config")


const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      trim: true,
      enum: [roles.USER],
      default: roles.USER
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function (next) {
  
  if (!this.isModified('password')) return next()

  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});



module.exports = mongoose.model('users', userSchema)
