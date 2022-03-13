const connection = require('../config/db-config');

const findAdminByEmail = (name) => connection.promise().query('SELECT * FROM admins WHERE name = ?', [name]);

module.exports = {
  findAdminByEmail,
};
