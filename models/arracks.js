'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Arracks.init({
    ename: DataTypes.STRING,
    sname: DataTypes.STRING,
    description: DataTypes.TEXT,
    price_180: DataTypes.INTEGER,
    price_375: DataTypes.INTEGER,
    price_750: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Arracks',
  });
  return Arracks;
};