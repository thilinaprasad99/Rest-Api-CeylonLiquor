const routes = require("express").Router();
const { createArrack, getArracks, updateArracks,deleteArracks } = require("../services/Arracks");
const {createCategory, getCategory,updateCategory,deleteCategory} = require("../services/Category");

routes.post("/arracks/create", (req, res) => {
  createArrack(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/arracks/get", (req, res) => {
  getArracks(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/arracks/update", (req, res) => {
  updateArracks(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/arracks/delete/:id", (req, res) => {
  deleteArracks(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/category/create", (req, res) => {
  createCategory(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/category/get", (req, res) => {
  getCategory(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/category/update", (req, res) => {
  updateCategory(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/category/delete/:id", (req, res) => {
  deleteCategory(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});
module.exports = routes;
