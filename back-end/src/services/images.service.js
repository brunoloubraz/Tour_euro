const { Image } = require('../models');

const getImages = () => {
  const response = Image.findAll();
  return response;
}

module.exports = {
  getImages
};