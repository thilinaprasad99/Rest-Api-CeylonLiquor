const routes = require("express").Router();
const { createArrack, getArracks, updateArracks,deleteArracks } = require("../services/Arracks");
const {createCategory, getCategory,updateCategory,deleteCategory} = require("../services/Category");
const {createBeers, getBeer,updateBeer,deleteBeer} = require("../services/Beers");
const {createWhiskeys, getWhiskey,updateWhiskey,deleteWhiskey} = require("../services/Whiskeys");
const {createRum, getRum,updateRum,deleteRum} = require("../services/Rums");


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

routes.post("/beers/create", (req, res) => {
  createBeers(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/beers/get", (req, res) => {
  getBeer(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/beers/update", (req, res) => {
  updateBeer(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/beers/delete/:id", (req, res) => {
  deleteBeer(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/Whiskeys/create", (req, res) => {
  createWhiskeys(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/Whiskeys/get", (req, res) => {
  getWhiskey(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/Whiskeys/update", (req, res) => {
  updateWhiskey(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/Whiskeys/delete/:id", (req, res) => {
  deleteWhiskey(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/Rums/create", (req, res) => {
  createRum(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/Rums/get", (req, res) => {
  getRum(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/Rums/update", (req, res) => {
  updateRum(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/Rums/delete/:id", (req, res) => {
  deleteRum(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});
module.exports = routes;
