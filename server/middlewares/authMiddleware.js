const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
require("dotenv").config();

exports.protect = async (req, res, next) => {
  let token;

  console.log(req.cookies);
  token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.id);
    req.userId = decoded.id;
    req.user = await User.findById(decoded.id).populate("role");
    next();
  } catch (err) {
    res.status(401).json({ message: "Token expired or invalid" });
  }
};
exports.authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role.name)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
