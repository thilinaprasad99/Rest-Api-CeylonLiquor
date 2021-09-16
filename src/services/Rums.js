const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createRum: async (info, callback) => {
    try {
      const createdRum = await models.Rums.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdRum,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getRum: async (info, callback) => {
    try {
      const Rum = await models.Rums.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Rum,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateRum: async (info, callback) => {
    try {
      const updateRum = await models.Rums.update(
        {
          ename: info.ename,
          sname: info.sname,
          description: info.description,
          price_375: info.price_375,
          price_750: info.price_750,
          price_1000: info.price_1000,
          image: info.image,
        },
        {
          where: { id: info.id },
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: updateRum,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteRum: async (info, callback) => {
    try {
      const data = await models.Rums.destroy(
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
