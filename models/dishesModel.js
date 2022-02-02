const connection = require('../config/db-config');

const dataBase = connection.promise();

const findAllDishes = () => dataBase.query('SELECT * FROM plats');

const findOneDisheById = (id) =>
  dataBase.query('SELECT * FROM plats WHERE id = ?', [id]);

const insertDishe = ({ name, image }, idAdmin) =>
  dataBase.query('INSERT INTO plats (name, image, id_admin) VALUES (?, ?, ?)', [
    name,
    image,
    idAdmin,
  ]);

const deleteDishe = (id) =>
  dataBase.query('DELETE FROM plats WHERE id = ?', [id]);

module.exports = {
  findAllDishes,
  findOneDisheById,
  insertDishe,
  deleteDishe,
};
