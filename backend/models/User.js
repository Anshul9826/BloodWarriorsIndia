const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: [
    {
      type: String,
      required: true,
    },
  ],
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
