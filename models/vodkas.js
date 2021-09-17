'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vodkas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vodkas.init({
    ename: DataTypes.STRING,
    sname: DataTypes.STRING,
    description: DataTypes.STRING,
    price_357: DataTypes.INTEGER,
    price_750: DataTypes.INTEGER,
    price_700: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vodkas',
  });
  return Vodkas;
};