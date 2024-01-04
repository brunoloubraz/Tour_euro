const { Post } = require('../models')

const getPosts = () => {
  const response = Post.findAll()
  return response;
}

const removePost = id => Post.destroy({ where: { id: id } })

module.exports = {
  getPosts,
  removePost,
};