const connection = require('../config/db-config');

const dataBase = connection.promise();

const findAllIngredients = () => dataBase.query('SELECT * FROM ingredients ORDER BY name ASC');

const findOneIngredientById = (id) => dataBase.query('SELECT * FROM ingredients WHERE id = ?', [id]);

const insertIngredient = ({ name }) => dataBase.query('INSERT INTO ingredients (name) VALUES (?)', [name]);

const listPlatByIngredient = (id) => dataBase.query('SELECT plats.name, plats.id, image FROM ingredients RIGHT JOIN plats_ingredients ON ingredients.id=plats_ingredients.id_ingredients JOIN plats ON plats.id=plats_ingredients.id_plats WHERE ingredients.id=? ORDER BY plats.name ASC', [id]);

module.exports = {
  findAllIngredients,
  findOneIngredientById,
  listPlatByIngredient,
  insertIngredient,
};
