'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Beers.init({
    ename: DataTypes.STRING,
    sname: DataTypes.STRING,
    description: DataTypes.STRING,
    price_120: DataTypes.INTEGER,
    price_180: DataTypes.INTEGER,
    price_190: DataTypes.INTEGER,
    price_220: DataTypes.INTEGER,
    price_240: DataTypes.INTEGER,
    price_300: DataTypes.INTEGER,
    price_330: DataTypes.INTEGER,
    price_340: DataTypes.INTEGER,
    price_350: DataTypes.INTEGER,
    price_370: DataTypes.INTEGER,
    price_400: DataTypes.INTEGER,
    price_500: DataTypes.INTEGER,
    price_600: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beers',
  });
  return Beers;
};