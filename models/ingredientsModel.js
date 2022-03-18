const connection = require('../config/db-config');

const dataBase = connection.promise();

const findAllIngredients = () => dataBase.query('SELECT * FROM ingredients ORDER BY name ASC');

const findSpecificIngredient = (name) => dataBase.query('SELECT id FROM ingredients WHERE name = ?', [name]);

const findNameIngredients = () => dataBase.query('SELECT name FROM ingredients ORDER BY name ASC');

const findOneIngredientById = (id) => dataBase.query('SELECT * FROM ingredients WHERE id = ?', [id]);

const insertIngredient = ({ name }) => dataBase.query('INSERT INTO ingredients (name) VALUES (?)', [name]);

const listPlatByIngredient = (id) => dataBase.query('SELECT plats.name, plats.id, image FROM ingredients RIGHT JOIN plats_ingredients ON ingredients.id=plats_ingredients.id_ingredients JOIN plats ON plats.id=plats_ingredients.id_plats WHERE ingredients.id=? ORDER BY plats.name ASC', [id]);

const association = ({idPlats, idIngredients}) => dataBase.query('INSERT INTO plats_ingredients (id_plats, id_ingredients) VALUES (?, ?)', [idPlats, idIngredients]);

/* const associationPlat = (id_ingredients, id_plats) => dataBase.query(
    'INSERT INTO plats_ingredients (id_plats, id_ingredients) VALUES (?, ?)',
    [id_plats, id_ingredients]
  );

const associationPlat2 = (id_plats) => dataBase.query(
    'INSERT INTO plats_ingredients (id_plats) VALUES (?)',
    [id_plats]
  );

const associationingre = ({ id_ingredients }) => dataBase.query(
    'INSERT INTO plats_ingredients (id_ingredients) VALUES (?)',
    [id_ingredients]
  ); */

module.exports = {
  findAllIngredients,
  findSpecificIngredient,
  findNameIngredients,
  findOneIngredientById,
  listPlatByIngredient,
  insertIngredient,
  association,
  /* associationPlat,
  associationingre,
  associationPlat2, */
};
