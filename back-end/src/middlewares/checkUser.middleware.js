const { userService } = require('../services/index')

const checkUser = async (req, res, next) => {
  const { id } = req.params;
  const checkUser = await userService.getUserById(id)
  if (!checkUser) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  next()
};

module.exports = {
  checkUser,
};