const ingredientsRouter = require('express').Router();
const ingredient = require('../models/ingredientsModel');

ingredientsRouter.get('/', async (req, res) => {
  const [ingre] = await ingredient.findAllIngredients(req.query);
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

ingredientsRouter.get('/liste/:id', async (req, res) => {
  const [listForIngredients] = await ingredient.listPlatByIngredient(req.params.id);
  if (listForIngredients) {
    res.json(listForIngredients);
  } else {
    res.status(404).json();
  }
});

ingredientsRouter.post('/', async (req, res) => {
  const [{ insertId }] = await ingredient.insertIngredient(req.body);
  const newIngredient = req.body;
  res.status(201).json({
    id: insertId,
    ...newIngredient,
  });
});

module.exports = ingredientsRouter;
