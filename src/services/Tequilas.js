const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createTequila: async (info, callback) => {
    try {
      const createdTequila = await models.Tequilas.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdTequila,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getTequila: async (info, callback) => {
    try {
      const Tequila = await models.Tequilas.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Tequila,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateTequila: async (info, callback) => {
    try {
      const updateTequila = await models.Tequilas.update(
        {
          ename: info.ename,
          sname: info.sname,
          description: info.description,
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
        body: updateTequila,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteTequila: async (info, callback) => {
    try {
      const data = await models.Tequilas.destroy(
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
