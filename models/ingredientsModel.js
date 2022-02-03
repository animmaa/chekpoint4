const connection = require('../config/db-config');

const dataBase = connection.promise();

const findAllIngredients = () => dataBase.query('SELECT * FROM ingredients');

const findOneIngredientById = (id) =>
  dataBase.query('SELECT * FROM ingredients WHERE id = ?', [id]);

/* const listIngredientsByPlat = (id) =>
  dataBase.query(
    'select * from plats right join plats_ingredients on plats.id=plats_ingredients.id_plats inner join ingredients on ingredients.id=plats_ingredients.id_ingredients where plats.id = ? order by ingredients.name asc;', [id]
  ); */

module.exports = {
  findAllIngredients,
  findOneIngredientById,
  /* listIngredientsByPlat, */
};
