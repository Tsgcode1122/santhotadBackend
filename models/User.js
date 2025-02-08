const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    referralLink: {
      type: String,

      unique: true,
    },

    phoneNumber: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    streetAddress: {
      type: String,
    },
    accountNumber: {
      type: String,
    },
    bank: {
      type: String,
    },
    accountName: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
