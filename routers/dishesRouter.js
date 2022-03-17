const dishesRouter = require('express').Router();
/* const checkJwt = require('../middlewares/checkJwt'); */
const multer = require('multer');

const upload = multer({ dest: 'uploads/test/' });
const dishe = require('../models/dishesModel');

dishesRouter.get('/', async (req, res) => {
  const [plats] = await dishe.findAllDishes(req.query);
  res.json(plats);
});

dishesRouter.get('/liste', async (req, res) => {
  const [listing] = await dishe.list(req.query);
  res.json(listing);
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

/* dishesRouter.post('/', upload.single('image'), (req, res) => {
  res.json({
    body: req.body,
    file: req.file.filename
  })
}) */

dishesRouter.post('/', upload.single('image'), async (req, res) => {
  console.log(req.body, req.file);
  const [{ insertId: id }] = await dishe.insertDishe(req.body, req.file.path);
  res.json({
    ...req.body,
    id,
    image: req.file.filename,
  });
});

/* dishesRouter.post('/', checkJwt, async (req, res) => {
  const [{ insertId }] = await dishe.insertDishe(req.body);
  const newPlats = req.body;
  res.status(201).json({
    id: insertId,
    ...newPlats,
  });
}); */

/* dishesRouter.post('/', upload.single('image'), async (req, res) => {
  const [{ insertId: id }] = await dishe.insertDishe(req.body, req.file.path);
  res.status(201).json({
    ...req.body,
    id,
    image: req.file.filename,
  });
}); */

dishesRouter.post('/image/', upload.single('image'), (req, res) => {
  res.json(req.file);
});

dishesRouter.delete('/:id', async (req, res) => {
  await dishe.deleteDishe(req.params.id);
  res.status(204).json();
});

module.exports = dishesRouter;
