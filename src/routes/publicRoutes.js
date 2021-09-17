const routes = require("express").Router();
const { createArrack, getArracks, updateArracks,deleteArracks } = require("../services/Arracks");
const {createCategory, getCategory,updateCategory,deleteCategory} = require("../services/Category");
const {createBeers, getBeer,updateBeer,deleteBeer} = require("../services/Beers");
const {createWhiskeys, getWhiskey,updateWhiskey,deleteWhiskey} = require("../services/Whiskeys");
const {createRum, getRum,updateRum,deleteRum} = require("../services/Rums");
const {createGin, getGin,updateGin,deleteGin} = require("../services/Gins");
const {createVodka, getVodka,updateVodka,deleteVodka} = require("../services/Vodkas");
const {createWine, getWine,updateWine,deleteWine} = require("../services/Wines");
const {createChampagne, getChampagne,updateChampagne,deleteChampagne} = require("../services/Champagnes");
const {createTequila, getTequila,updateTequila,deleteTequila} = require("../services/Tequilas");
const {createBrandy, getBrandy,updateBrandy,deleteBrandy} = require("../services/Brandys");







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

routes.post("/Gins/create", (req, res) => {
  createGin(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/Gins/get", (req, res) => {
  getGin(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/Gins/update", (req, res) => {
  updateGin(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/Gins/delete/:id", (req, res) => {
  deleteVodka(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});
routes.post("/Vodkas/create", (req, res) => {
  createVodka(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/Vodkas/get", (req, res) => {
  getVodka(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/Vodkas/update", (req, res) => {
  updateVodka(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/Vodkas/delete/:id", (req, res) => {
  deleteVodka(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/Wines/create", (req, res) => {
  createWine(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/Wines/get", (req, res) => {
  getWine(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/Wines/update", (req, res) => {
  updateWine(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/Wines/delete/:id", (req, res) => {
  deleteWine(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/Champagnes/create", (req, res) => {
  createChampagne(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/Champagnes/get", (req, res) => {
  getChampagne(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/Champagnes/update", (req, res) => {
  updateChampagne(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/Champagnes/delete/:id", (req, res) => {
  deleteChampagne(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/Tequilas/create", (req, res) => {
  createTequila(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/Tequilas/get", (req, res) => {
  getTequila(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/Tequilas/update", (req, res) => {
  updateTequila(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/Tequilas/delete/:id", (req, res) => {
  deleteTequila(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/Brandys/create", (req, res) => {
  createBrandy(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/Brandys/get", (req, res) => {
  getBrandy(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/Brandys/update", (req, res) => {
  updateBrandy(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/Brandys/delete/:id", (req, res) => {
  deleteBrandy(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});
module.exports = routes;
