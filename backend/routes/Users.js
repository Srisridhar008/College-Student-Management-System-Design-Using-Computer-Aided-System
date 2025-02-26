
const express = require('express');
const router = express.Router();
const userModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();  

router.use(bodyParser.json());

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, dept, role } = req.body;
    console.log("Signup request data:", req.body);

    const emailFound = await userModel.findOne({ email });
    if (emailFound) {
      console.log("Email already exists:", email);
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password || "", 10); 
    let users = new userModel({
      name,
      email,
      password: hashedPassword,
      dept,
      role,
      isVerified: false,
    });

    await users.save();
    console.log("User saved successfully");

    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io', 
      port: 2525,
      auth: {
        user: process.env.EMAIL,  
        pass: process.env.PASSWORD,
      },
    });

    const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    const verificationLink = `http://localhost:3003/users/verify/${token}`;

    transport.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Verification Email from APP NAME",
      html: `<a href="${verificationLink}">Click here to verify your account</a>`,
    }, (error, info) => {
      if (error) {
        console.error("Email sending failed:", error);
        return res.status(500).json({ message: "Failed to send email", error });
      }
      res.status(200).json({ message: "Signup successful, activation link sent" });
    });

  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;  

    let user = await userModel.findOne({ name }); 

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    let isMatched = await bcrypt.compare(password || "", user.password);  
    if (!isMatched) {
      return res.status(401).json({ message: "Incorrect Password" });  
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login Successful", token, name: user.name });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;  
