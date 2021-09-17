const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createWine: async (info, callback) => {
    try {
      const createdWine = await models.Wines.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdWine,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getWine: async (info, callback) => {
    try {
      const Wine = await models.Wines.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Wine,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateWine: async (info, callback) => {
    try {
      const updateWine = await models.Wines.update(
        {
          ename: info.ename,
          sname: info.sname,
          description: info.description,
          price_750: info.price_750,
          image: info.image,
        },
        {
          where: { id: info.id },
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: updateWine,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteWine: async (info, callback) => {
    try {
      const data = await models.Wines.destroy(
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
