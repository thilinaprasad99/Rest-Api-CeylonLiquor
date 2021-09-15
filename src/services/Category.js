const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createCategory: async (info, callback) => {
    try {
      const createdCategory = await models.Categorys.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdCategory,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getCategory: async (info, callback) => {
    try {
      const Category = await models.Categorys.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Category,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateCategory: async (info, callback) => {
    try {
      const CategoryUpdate = await models.Categorys.update(
        {
          ca_ename: info.ca_ename,
          ca_sname: info.ca_sname,
          ca_screen: info.ca_screen,
          ca_image: info.ca_image,
        },
        {
          where: {id: info.id}
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: CategoryUpdate,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteCategory: async (info, callback) => {
    try {
      const data = await models.Categorys.destroy(
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
