const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createChampagne: async (info, callback) => {
    try {
      const createdChampagne = await models.Champagnes.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdChampagne,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getChampagne: async (info, callback) => {
    try {
      const Champagne = await models.Champagnes.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Champagne,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateChampagne: async (info, callback) => {
    try {
      const updateChampagne = await models.Champagnes.update(
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
        body: updateChampagne,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteChampagne: async (info, callback) => {
    try {
      const data = await models.Champagnes.destroy(
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
