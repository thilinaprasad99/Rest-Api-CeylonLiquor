"use strict";
module.exports = (sequelize, DataTypes) => {
  const Categorys = sequelize.define(
    "categorys",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      ca_ename: {
        type: DataTypes.STRING
      },
      ca_sname: {
        type: DataTypes.STRING
      },
      ca_screen: {
        type: DataTypes.TEXT
      },
      ca_image: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );
  Categorys.associate = function (models) {};
  return Categorys;
};
