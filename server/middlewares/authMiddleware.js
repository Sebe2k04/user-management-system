const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).populate('role');
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token expired or invalid' });
  }
};
exports.authorize = (...allowedRoles) => {
    return (req, res, next) => {
      if (!allowedRoles.includes(req.user.role.name)) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    };
  };
  