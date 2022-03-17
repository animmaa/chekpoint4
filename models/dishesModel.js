const connection = require('../config/db-config');

const dataBase = connection.promise();

const findAllDishes = () => dataBase.query('SELECT * FROM plats');

const findOneDisheById = (id) => dataBase.query('SELECT * FROM plats WHERE id = ?', [id]);

const insertDishe = ({ name, lienRecette }, image) => dataBase.query('INSERT INTO plats (name, image, lien_recette) VALUES (?, ?, ?)', [name, image, lienRecette]);

const listIngredientsByPlat = (id) => dataBase.query('SELECT ingredients.name FROM plats RIGHT JOIN plats_ingredients ON plats.id=plats_ingredients.id_plats JOIN ingredients ON ingredients.id=plats_ingredients.id_ingredients WHERE plats.id=? ORDER BY ingredients.name ASC', [id]);

const list = () => dataBase.query('SELECT * FROM plats RIGHT JOIN plats_ingredients ON plats.id=plats_ingredients.id_plats JOIN ingredients ON ingredients.id=plats_ingredients.id_ingredients');

const deleteDishe = (id) => dataBase.query('DELETE FROM plats WHERE id = ?', [id]);

module.exports = {
  findAllDishes,
  findOneDisheById,
  insertDishe,
  deleteDishe,
  listIngredientsByPlat,
  list,
};
