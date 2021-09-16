const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createWhiskeys: async (info, callback) => {
    try {
      const createdWhiskey = await models.Whiskey.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdWhiskey,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getWhiskey: async (info, callback) => {
    try {
      const Whiskey = await models.Whiskey.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Whiskey,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateWhiskey: async (info, callback) => {
    try {
      const updateWhiskey = await models.Whiskey.update(
        {
          ename: info.ename,
          sname: info.sname,
          description: info.description,
          price_375: info.price_375,
          price_650: info.price_650,
          price_700: info.price_700,
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
        body: updateWhiskey,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteWhiskey: async (info, callback) => {
    try {
      const data = await models.Whiskey.destroy(
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
