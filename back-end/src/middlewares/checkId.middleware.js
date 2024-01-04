
const checkId = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ message: 'Insert an Id' });
  }
  next()
};

module.exports = {
  checkId,
};