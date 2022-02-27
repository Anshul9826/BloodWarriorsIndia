const express = require("express");
const User = require("../models/User");
const Otp = require("../models/otp");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bodyparser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
var fetchuser = require("../middleware/fetchuser");

// Route 1: Create a User using : POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("firstName", "First name must be atleast 3 characters").isLength({ min: 3 }),
    body("lastName", "Last name must be atleast 3 characters").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("bloodGroup", "Enter a valid bloodGroup").isLength({ min: 2 }),
    body("gender", "Enter a valid gender").isLength({ min: 3 }),
    body("country", "Country name must be atleast 3 characters").isLength({ min: 3 }),
    body("state", "State name must be atleast 3 characters").isLength({ min: 3 }),
    body("pinCode", "Pincode must be atleast 5 characters").isLength({ min: 5 }),
    body("city", "City name must be atleast 3 characters").isLength({ min: 3 }),
    body("street", "Street name must be atleast 3 characters").isLength({ min: 3 }),
    // body("dateOfbirth", "Enter a valid date of Birth").isDate(),
  ],
  async (req, res) => {
    // If there are errors , return bad request and the errors
    let errors = validationResult(req);
    let errormsg = errors.array();
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, error: errormsg[0].msg });
    }
    try {
      // Check wether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Email already exists",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: secPass,
        dateOfBirth: req.body.dateOfBirth,
        bloodGroup: req.body.bloodGroup,
        gender: req.body.gender,
        city: req.body.city,
        country: req.body.country,
        state: req.body.state,
        pinCode: req.body.pinCode,
        street: req.body.street,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      success = true;
      res
        .status(200)
        .json({ success, authToken, msg: "Account created successfully!" });
    } catch (error) {
      res.status(500).send("Internal Server error");
    }
  }
);

// Route 2: Authenticate  a User using: POST "/api/auth/login". No Login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email !").isEmail(),
    body("password", "Password is required !").exists(),
  ],
  async (req, res) => {
    // If there are errors , return bad request and the errors
    const errors = validationResult(req);
    let errormsg = errors.array();
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errormsg[0].msg });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success, error: "Wrong Email or Password !" });
      }
      let passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ success, error: "Wrong Email or Password !" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      success = true;
      res.json({ success, authToken, msg: "Loggedin successfully!" });
    } catch (error) {
      res.status(500).send("Internal Server error");
    }
  }
);
// Route 3: login using google : POST "/api/auth/googlelogin".
// router.post(
//   "/googlelogin",

//   async (req, res) => {
//     const {tokenId} =req.body;
//     client.verifyIdToken({idToken: tokenId, audience: "164559736038-kc3t484u2p3c1ccersf2v9nna9mjpj9b.apps.googleusercontent.com"}).then(response=>{
//       const {email_verified, name, email}=response.payload;
//       console.log(response.payload);
//     })
//     console.log();
//   }
// );
// Route 3: Get loggedin User Details using : POST "/api/auth/getuser". Login required

router.get("/getuser", fetchuser, async (req, res) => {
  try {
    var userId = req.user.id;
    const user = await User.findById(userId).select("-password"); 
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
});

router.post("/email_send", async (req, res) => {
  let success = false;
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ success, error: "Email doesn't exist!" });
    }
    let otpCode = Math.floor(Math.random() * 10000 + 1);
    let otpData = new Otp({
      email: req.body.email,
      code: otpCode,
      expireIn: new Date().getTime() + 300 * 1000,
    });
    otpData.save();
    success = true;
    res.status(200).json({ success, msg: "Otp send Successfully!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server error");
  }
});

router.post("/change_password", async (req, res) => {
  let success = false;
  let data = await Otp.findOne({ email: req.body.email, code: req.body.otp });
  if (data) {
    let currentTime = new Date().getTime();
    let diff = data.expireIn - currentTime;
    if (diff < 0) {
      return res.status(400).json({ success, error: "Otp is expired!" });
    } else {
      let user = await User.findOne({ email: req.body.email });
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user.password = secPass;
      user.save();
      success = true;
      res.status(200).json({ success, msg: "Password changed successfully" });
    }
  } else {
    res.status(500).json({ success, error: "Invalid Otp!" });
  }
});

const mailer = (email, otp) => {
  let nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "anshulchoubey25@gmail.com",
      pass: "#Ac@9977",
    },
  });

  let mailOptions = {
    from: "anshulchoubey25@gmail.com",
    to: "anshulchoubey31@gmail.com",
    subject: "Sending Email using Node.js",
    text: "Thank you!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent: " + info.response);
    }
  });
};

module.exports = router;
