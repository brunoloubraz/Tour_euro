const { User } = require('../models')

const getUsers = () => {
  const response = User.findAll()
  return response;
}

module.exports = {
  getUsers,
};