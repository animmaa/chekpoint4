const dishesRouter = require('express').Router();
const dishe = require('../models/dishesModel');

dishesRouter.get('/', async (req, res) => {
  const [plats] = await dishe.findAllDishes(req.query);
  res.json(plats);
});

dishesRouter.get('/liste', async (req, res) => {
  const [listing] = await dishe.list(req.query);
  res.json(listing)
});
dishesRouter.get('/:id', async (req, res) => {
  const [[name]] = await dishe.findOneDisheById(req.params.id);
  if (name) {
    res.json(name);
  } else {
    res.status(404).json();
  }
});

dishesRouter.get('/liste/:id', async (req, res) => {
  const [listForPlat] = await dishe.listIngredientsByPlat(req.params.id);
  if (listForPlat) {
    res.json(listForPlat);
  } else {
    res.status(404).json();
  }
});


dishesRouter.post('/', async (req, res) => {
    const [{ insertId }] = await dishe.insertDishe(req.body);
    const newPlats = req.body;
    res.status(201).json({
        id: insertId,
        ...newPlats,
    })
})

dishesRouter.delete('/:id', async (req, res) => {
  await dishe.deleteDishe(req.params.id);
  res.status(204).json();
});

module.exports = dishesRouter;
