const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createGin: async (info, callback) => {
    try {
      const createdGin = await models.Gins.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdGin,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getGin: async (info, callback) => {
    try {
      const Gin = await models.Gins.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Gin,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateGin: async (info, callback) => {
    try {
      const updateGin = await models.Gins.update(
        {
          ename: info.ename,
          sname: info.sname,
          description: info.description,
          price_375: info.price_375,
          price_750: info.price_750,
          price_700: info.price_700,
          price_1000: info.price_1000,
          image: info.image,
        },
        {
          where: { id: info.id },
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: updateGin,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteGin: async (info, callback) => {
    try {
      const data = await models.Gins.destroy(
        {
          where: {id: info.id}
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: {},
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },
};
