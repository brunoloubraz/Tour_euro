const { imageService } = require('../services/index')

const getImages = async (_req, res) => {
  try {
    const response = await imageService.getImages();
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getImages
}