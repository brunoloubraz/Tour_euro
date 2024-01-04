const { userService } = require('../services/index')

const getUsers = async (_req, res) => {
  try {
    const response = await userService.getUsers();
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userService.getUserById(id);
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
}

const createUser = async (req, res) => {
  try {
    const { email, firstName, lastName, description, password } = req.body;
    const response = await userService.createUser( email, firstName, lastName, description, password);
    res.status(201).json(response)
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};