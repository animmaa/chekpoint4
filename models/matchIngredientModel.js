const connection = require('../config/db-config');

const dataBase = connection.promise();

const createIngredientMatch = ({ id_ingredients }, id_plats) =>
  dataBase.query(
    `INSERT INTO  plats_ingredients (id_plats, id_ingredients) VALUES (?, ?)`,
    [id_plats, id_ingredients]
  );

module.exports = {
  createIngredientMatch,
};