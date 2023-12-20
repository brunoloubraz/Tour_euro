'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      text: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('posts')
  }
};
