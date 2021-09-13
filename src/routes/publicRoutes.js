const routes = require("express").Router();
const { createArrack, getArracks, updateArracks,deleteArracks } = require("../services/Arracks");

routes.post("/arracks/create", (req, res) => {
  createArrack(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/arracks/getArracks", (req, res) => {
  getArracks(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/arracks/updateArracks", (req, res) => {
  // console.log(req.body);
  updateArracks(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});
routes.delete("/arracks/deleteArracks", (req, res) => {
  deleteArracks(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

module.exports = routes;
