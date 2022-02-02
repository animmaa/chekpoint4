const ingredientsRouter = require('express').Router();
const ingredient = require('../models/ingredientsModel');

ingredientsRouter.get('/', async (req, res) => {
  const ingre = await ingredient.findAllIngredients(req.query);
  res.json(ingre);
});

ingredientsRouter.get('/:id', async (req, res) => {
  const [[name]] = await ingredient.findOneIngredientById(req.params.id);
  if (name) {
    res.json(name);
  } else {
    res.status(404).json();
  }
});

module.exports = ingredientsRouter;
