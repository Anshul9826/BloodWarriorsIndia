const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bodyparser = require('body-parser');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {OAuth2Client} =require("google-auth-library");
var fetchuser = require("../middleware/fetchuser");


// Route 1: Create a User using : POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("firstName", "Enter a valid first name").isLength({ min: 3 }),
    body("lastName", "Enter a valid last name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({min: 5}),
    body("bloodGroup", "Enter a valid bloodGroup").isLength({ min: 2}),
    body("gender", "Enter a valid gender").isLength({ min: 3 }),
    body("country", "Enter a valid country").isLength({ min: 3 }),
    body("state", "Enter a valid state").isLength({ min: 3 }),
    body("pinCode", "Enter a valid pincode").isLength({ min: 3 }),
    body("city", "Enter a valid city").isLength({ min: 3 }),
    body("street", "Enter a valid street").isLength({ min: 3 }),
    // body("dateOfbirth", "Enter a valid date of Birth").isDate(),
  ],
  async (req, res) => {
    // If there are errors , return bad request and the errors
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      // Check wether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({success, error: "Sorry a user with this email already exists" });
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
      success= true;
      res.json({success, authToken });
    } catch (error) {
      console.log(error.message);
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
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({success, error: "Wrong Username or Password !" });
      }
      let passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({success, error: "Wrong Username or Password !" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success =true;
      res.json({success, authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);
// Route 3: login using google : POST "/api/auth/googlelogin".
router.post(
  "/googlelogin",
  
  async (req, res) => {
    const {tokenId} =req.body;
    client.verifyIdToken({idToken: tokenId, audience: "164559736038-kc3t484u2p3c1ccersf2v9nna9mjpj9b.apps.googleusercontent.com"}).then(response=>{
      const {email_verified, name, email}=response.payload;
      console.log(response.payload);
    })
    console.log();
  }
);
// Route 4: Get loggedin User Details using : POST "/api/auth/getuser". Login required

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    var userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server error");
  }
});

module.exports = router;
