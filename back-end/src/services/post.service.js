const { Post } = require('../models')

const getPosts = () => {
  const response = Post.findAll()
  return response;
}

module.exports = {
  getPosts,
};