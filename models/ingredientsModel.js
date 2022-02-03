const connection = require('../config/db-config');

const dataBase = connection.promise();

const findAllIngredients = () => dataBase.query('SELECT * FROM ingredients ORDER BY name ASC');

const findOneIngredientById = (id) =>
  dataBase.query('SELECT * FROM ingredients WHERE id = ?', [id]);

module.exports = {
  findAllIngredients,
  findOneIngredientById,
};
