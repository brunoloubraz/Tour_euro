const { Post, sequelize } = require('../models')

const getPosts = () => {
  const response = Post.findAll()
  return response;
}

const removePost = id => Post.destroy({ where: { id: id } })

const createPost = async (title, text, id) => {
  console.log(id);
  const response = 
    await Post.create(
      {
        title, text, userId: id, createdAt: new Date(),
      },
    );
  return response;
};

module.exports = {
  getPosts,
  removePost,
  createPost,
};