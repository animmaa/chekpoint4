const connection = require('../config/db-config');

const dataBase = connection.promise();

const findAllDishes = () => dataBase.query('SELECT * FROM plats');

const findOneDisheById = (id) =>
  dataBase.query('SELECT * FROM plats WHERE id = ?', [id]);

module.exports = {
  findAllDishes,
  findOneDisheById,
};
