const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user"
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
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
