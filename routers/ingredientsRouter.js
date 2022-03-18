const ingredientsRouter = require('express').Router();
const ingredient = require('../models/ingredientsModel');

ingredientsRouter.get('/', async (req, res) => {
  const [ingre] = await ingredient.findAllIngredients(req.query);
  res.json(ingre);
});

ingredientsRouter.get('/test/:name', async (req, res) => {
  const [[idIgred]] = await ingredient.findSpecificIngredient(req.params.name);
  if (idIgred) {
    res.json(idIgred);
  } else {
    res.status(404).json();
  }
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
    req.params.id
  );
  if (listForIngredients) {
    res.json(listForIngredients);
  } else {
    res.status(404).json();
  }
});

ingredientsRouter.post('/', async (req, res) => {
  console.log(req.body)
  const [{ insertName }] = await ingredient.insertIngredient(req.body);
  const newIngredient = req.body;
  res.status(201).json({
    id: insertName,
    ...newIngredient,
  });
});

/* ingredientsRouter.post('/', async (req, res) => {
  const [{ insertName }] = await ingredient.insertIngredient(req.body);

  if (error) {
    return res.status(400).json(error);
  }

  try {
    return res.status(200).json({
      id: insertName,
      ...req.body,
    });
  } catch (errors) {
    console.log(errors);
    return res.status(500).json({ errors });
  }
}); */

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
