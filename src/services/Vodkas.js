const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createVodka: async (info, callback) => {
    try {
      const createdVodka = await models.Vodkas.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdVodka,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getVodka: async (info, callback) => {
    try {
      const Vodka = await models.Vodkas.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Vodka,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateVodka: async (info, callback) => {
    try {
      const updateVodka = await models.Vodkas.update(
        {
          ename: info.ename,
          sname: info.sname,
          description: info.description,
          price_357: info.price_357,
          price_750: info.price_750,
          price_700: info.price_700,
          image: info.image,
        },
        {
          where: { id: info.id },
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: updateVodka,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteVodka: async (info, callback) => {
    try {
      const data = await models.Vodkas.destroy(
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
