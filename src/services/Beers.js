const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createBeers: async (info, callback) => {
    try {
      const createdBeer = await models.Beers.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdBeer,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getBeer: async (info, callback) => {
    try {
      const Beer = await models.Beers.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Beer,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateBeer: async (info, callback) => {
    try {
      const BeerUpdate = await models.Beers.update(
        {
          ename: info.ename,
          sname: info.sname,
          description: info.description,
          price_120: info.price_120,
          price_180: info.price_180,
          price_190: info.price_190,
          price_220: info.price_220,
          price_240: info.price_240,
          price_300: info.price_300,
          price_330: info.price_330,
          price_340: info.price_340,
          price_350: info.price_350,
          price_370: info.price_370,
          price_400: info.price_400,
          price_500: info.price_500,
          price_600: info.price_600,
          image: info.image,
        },
        {
          where: { id: info.id },
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: BeerUpdate,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteBeer: async (info, callback) => {
    try {
      const data = await models.Beers.destroy(
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
