const loginRouter = require('express').Router();
const Joi = require('joi');
const argon2 = require('argon2');
const { findAdminByEmail } = require('../models/admin');
const { generateJwt } = require('../utils/auth');

const userShema = Joi.object({
  name: Joi.string().presence('required'),
  password: Joi.string().presence('required'),
});

loginRouter.post('/login', async (req, res) => {
  const { value, error } = userShema.validate(req.body);

  if (error) {
    return res.status(400).json(error);
  }

  const [[existingAdmin]] = await findAdminByEmail(value.name);

  if (!existingAdmin) {
    return res.status(403).json({
      message: 'connexion error',
    });
  }

  const verified = await argon2.verify(existingAdmin.password, value.password);

  console.log(verified);

  if (!verified) {
    return res.status(403).json({
      message: 'connexion error',
    });
  }

  const jwtKey = generateJwt(value.name, 'admin');

  return res.json({
    credential: jwtKey,
  });
});

module.exports = loginRouter;
