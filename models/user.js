const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    imgUrl: {
      type: String,
      default: "/uploads/defaultImg.png",
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

module.exports = mongoose.model("Users", userSchema);
