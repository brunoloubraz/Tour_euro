const { userService } = require('../services/index')

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json({ message: 'Email not found, please insert one'});
  }
  const response = await userService.getUserByEmail(email);
  if (response) {
    res.status(401).json({ message: 'Email already registered'});
  }
  next()
};

module.exports = {
  checkEmail,
};