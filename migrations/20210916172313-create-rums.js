'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ename: {
        type: Sequelize.STRING
      },
      sname: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price_375: {
        type: Sequelize.INTEGER
      },
      price_750: {
        type: Sequelize.INTEGER
      },
      price_1000: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rums');
  }
};