const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateJwt = (name, role) => jwt.sign({ name, role }, process.env.JWT_SECRET);

module.exports = {
  generateJwt,
};
