"use strict";
module.exports = (sequelize, DataTypes) => {
  const Arracks = sequelize.define(
    "arracks",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      ename: {
        type: DataTypes.STRING
      },
      sname: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      price_180: {
        type: DataTypes.INTEGER
      },
      price_375: {
        type: DataTypes.INTEGER
      },
      price_750: {
        type: DataTypes.INTEGER
      },
      image: {
        type: DataTypes.STRING
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
  Arracks.associate = function (models) {};
  return Arracks;
};
