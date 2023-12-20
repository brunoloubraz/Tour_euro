'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users' , 
    [{
      id: 1,
      email: 'karina@gmail.com',
      firstName: 'karina',
      lastName: 'braz',
      password: '12345braz'
    },
    {
      id: 2,
      email: 'bruno@gmail.com',
      firstName: 'bruno',
      lastName: 'braz',
      password: 'admin1234'
    }], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
