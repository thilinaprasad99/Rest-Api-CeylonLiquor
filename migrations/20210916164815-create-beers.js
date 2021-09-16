'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Beers', {
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
      price_120: {
        type: Sequelize.INTEGER
      },
      price_180: {
        type: Sequelize.INTEGER
      },
      price_190: {
        type: Sequelize.INTEGER
      },
      price_220: {
        type: Sequelize.INTEGER
      },
      price_240: {
        type: Sequelize.INTEGER
      },
      price_300: {
        type: Sequelize.INTEGER
      },
      price_330: {
        type: Sequelize.INTEGER
      },
      price_340: {
        type: Sequelize.INTEGER
      },
      price_350: {
        type: Sequelize.INTEGER
      },
      price_370: {
        type: Sequelize.INTEGER
      },
      price_400: {
        type: Sequelize.INTEGER
      },
      price_500: {
        type: Sequelize.INTEGER
      },
      price_600: {
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
    await queryInterface.dropTable('Beers');
  }
};