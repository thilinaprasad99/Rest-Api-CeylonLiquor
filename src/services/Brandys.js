const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createBrandy: async (info, callback) => {
    try {
      const createdBrandy = await models.Brandys.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdBrandy,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getBrandy: async (info, callback) => {
    try {
      const Brandy = await models.Brandys.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Brandy,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateBrandy: async (info, callback) => {
    try {
      const updateBrandy = await models.Brandys.update(
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
        body: updateBrandy,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteBrandy: async (info, callback) => {
    try {
      const data = await models.Brandys.destroy(
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
