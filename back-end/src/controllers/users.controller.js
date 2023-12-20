const getUsers = async (_req, res) => {
  try {
    const response = await usersServices.getUsers();
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getUsers,
};