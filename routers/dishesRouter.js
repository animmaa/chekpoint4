const dishesRouter = require('express').Router();
const dishe = require('../models/dishesModel');

dishesRouter.get('/', async (req, res) => {
  const plats = await dishe.findAllDishes(req.query);
  res.json(plats);
});

dishesRouter.get('/:id', async (req, res) => {
  const [[name]] = await dishe.findOneDisheById(req.params.id);
  if (name) {
    res.json(name);
  } else {
    res.status(404).json();
  }
});

module.exports = dishesRouter;
