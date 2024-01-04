const { postService } = require('../services/index')

const getPosts = async (req, res) => {
  try {
    const response = await postService.getPosts()
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
};

const removePost = async (req, res) => {
  try {
    const {id} = req.params;
    await postService.removePost(id)
    res.status(204).end();
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getPosts,
  removePost,
}