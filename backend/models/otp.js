const mongoose = require("mongoose");
const { Schema } = mongoose;

const otpSchema = new Schema(
   {
       email:String,
       code: String,
       expireIn: Number
   },{
       timestamps:true
   }
);
const otp = mongoose.model("otp", otpSchema);
module.exports = otp;
