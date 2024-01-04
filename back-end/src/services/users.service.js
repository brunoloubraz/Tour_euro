const { User } = require('../models')

const getUsers = async () => {
  const response = await User.findAll({ attributes: { exclude: 'password' }});
  return response;
}

const getUserById = async (id) => {
  const response = await User.findOne({ 
    where: { id },
    attributes: { exclude: 'password' },  
  });
  return response;
};

const getUserByEmail = async (email) => {
  const response = await User.findOne({ where: { email }})
  return response;
};

const createUser = async ( email, firstName, lastName, description, password) => {
  const response = await User.create({ email, firstName, lastName, description, password })
  return response;
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  getUserByEmail,
};