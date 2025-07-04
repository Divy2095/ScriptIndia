const User = require("../models/User");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "codeDIV";

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the details.",
      });
    }

    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (password === user.password) {
      const payload = {
        id: user._id,
        userName: user.userName,
      };
      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "24h",
      });

      return res.status(200).json({
        success: true,
        message: "Welcome back!",
        token,
        user: {
          userName: user.userName,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials.",
      });
    }
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Login failure, please try again.",
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const { userName, password, email } = req.body;

    if (!userName || !password || !email) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the details.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({
        success: false,
        message: "User already exist.",
      });
    }

    const user = await User.create({
      userName,
      password,
      email,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully!",
      user: {
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Signup failure, please try again.",
    });
  }
};
