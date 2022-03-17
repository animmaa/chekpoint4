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
  const [listForIngredients] = await ingredient.listPlatByIngredient(
    req.params.id,
  );
  if (listForIngredients) {
    res.json(listForIngredients);
  } else {
    res.status(404).json();
  }
});

ingredientsRouter.post('/', async (req, res) => {
  const [{ insertName }] = await ingredient.insertIngredient(req.body);
  const newIngredient = req.body;
  res.status(201).json({
    id: insertName,
    ...newIngredient,
  });
});

/* ingredientsRouter.post('/insert/:id', async (req, res) => {
  const [ insertIngredient ] = await ingredient.association(req.body);
  const [idduplat] = await ingredient.association(req.params.id);
  const newIngredient = req.body;
  res.status(201).json({
    id: insertId,
    ...newIngredient,
  });
}); */

ingredientsRouter.post('/insert', async (req, res) => {
  const [{ insertIngredient }] = await ingredient.association(req.body);
  const newAssociation = req.body;
  res.status(201).json({
    id: insertIngredient,
    ...newAssociation,
  });
});

/* ingredientsRouter.post('/insert/:id', async (req, res) => {
  const [{ insertIngredient }] = await ingredient.associationingre(req.body);
  //const newAssociation = req.body;
  res.status(201).json({
    id: insertIngredient,
    ...newAssociation,
  });
}); */

/* ingredientsRouter.post('/insert/:id', async (req, res) => {
  const [{ insertIngredient }] = await ingredient.associationPlat2(req.params.id);
  const newAssociation = req.body;
  res.status(201).json({
    id: insertIngredient,
    ...newAssociation,
  });
}); */

/* ingredientsRouter.post('/insert/:id', async (req, res) => {
  const [{ insertIngredient }] = await ingredient.association(
    req.params.id
  );
  const newAssociation = req.body;
  res.status(201).json({
    id: insertIngredient,
    ...newAssociation,
  });
}); */

/* ingredientsRouter.post('/insert/:id', async (req, res) => {
  const { insertIngredient } = await ingredient.association(
    {id_plats: req.params, id_ingredients: req.body}
  );
  const newAssociation = req.body;
  res.status(201).json({
    id: insertIngredient,
    ...newAssociation,
  });
}); */

/* ingredientsRouter.post('/insert/:id', async (req, res) => {
  const idplat = req.params.id;
  console.log(idplat)
  const idIngredients = req.body.id_ingredients;
  console.log(idIngredients)
  const [insertIngredient] = await ingredient.associationPlat(10, 22);
  console.log(insertIngredient);
  const newAssociation = req.body;
  res.status(201).json({
    id: idplat,
    insertIngredient: insertIngredient,
    ...newAssociation,
  });
}); */

module.exports = ingredientsRouter;
