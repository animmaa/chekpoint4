connection = require('../config/db-config')

findAdminByEmail = (name) => connection.promise().query('SELECT * FROM admins WHERE name = ?', [name]);

module.exports = {
  findAdminByEmail,
};