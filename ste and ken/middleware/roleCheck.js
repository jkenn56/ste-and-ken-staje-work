const User = require('../models/User');

const adminOnly = async (req, res, next) => {
  try {
    const user = await User.findById(req.user).select('role');
    if (user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied' });
    }
    next();
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = adminOnly;
