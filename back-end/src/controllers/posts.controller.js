const { postService } = require('../services/index')

const getPosts = async (_req, res) => {
  try {
    const response = await postService.getPosts()
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getPosts,
}