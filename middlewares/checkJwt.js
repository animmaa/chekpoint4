const jwt = require('jsonwebtoken');

require('dotenv').config();

const checkJwt = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json('pas de clé');
  }

  try {
    const checkedJwt = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
    );
    console.log(checkedJwt);
    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json('clé non valide');
  }
};

module.exports = checkJwt;
