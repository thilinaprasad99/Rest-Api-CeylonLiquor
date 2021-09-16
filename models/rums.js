'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rums.init({
    ename: DataTypes.STRING,
    sname: DataTypes.STRING,
    description: DataTypes.STRING,
    price_375: DataTypes.INTEGER,
    price_750: DataTypes.INTEGER,
    price_1000: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rums',
  });
  return Rums;
};