const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { Roles } = require("./../config/constants")


const UserSchema = new Schema(
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
      enum: [Roles.USER],
      default: Roles.USER
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

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});


let user

try {
  user = mongoose.model('users')
} catch (error) {
  user = mongoose.model('users', UserSchema)
}

module.exports = user
