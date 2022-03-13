const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateJwt = (name, role) => {
  return jwt.sign(
    {
      name: name,
      role: role,
    },
    process.env.JWT_SECRET
  );
};

module.exports = {
  generateJwt,
};
