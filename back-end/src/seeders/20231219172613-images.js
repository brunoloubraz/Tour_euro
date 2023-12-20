'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('images', [{
      id: 1,
      imageTitle: 'Inglaterra',
      createdAt: new Date(),
      ImageData: '../API/images_profile/inglaterra.jpg',
      userId:1,
    },
  {
    id: 2,
    imageTitle: 'Portugal',
    createdAt: new Date(),
    ImageData: '../API/images_profile/Lisboa.jpg',
    userId:2,
  },
  {
    id: 3,
    imageTitle: 'Alemanha',
    createdAt: new Date(),
    ImageData: '../API/images_profile/Alemanha.png',
    userId:2,
  }], { timestamps: false});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('images', null, {});
  }
};
