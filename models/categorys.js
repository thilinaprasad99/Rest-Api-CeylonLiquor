'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Categorys.init({
    ca_ename: DataTypes.STRING,
    ca_sname: DataTypes.STRING,
    ca_screen: DataTypes.STRING,
    ca_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorys',
  });
  return Categorys;
};