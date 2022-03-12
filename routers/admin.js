const loginRouter = require('express').Router();
const Joi = require('joi');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { findAdminByEmail } = require('../models/admin');

require('dotenv').config();

const userShema = Joi.object({
  name: Joi.string().presence('required'),
  password: Joi.string().presence('required'),
});

loginRouter.post('/login', async (req, res) => {
  const { value, error } = userShema.validate(req.body);
  //console.log(value, error);

  if (error) {
    return res.status(400).json(error);
  }

  const [[existingAdmin]] = await findAdminByEmail(value.name);

  if (!existingAdmin) {
      return res.status(403).json({
          message: "connexion error"
      })
  }

  console.log(existingAdmin.password)

  const verified = await argon2.verify(existingAdmin.password, value.password)

  console.log(verified);

  if (!verified) {
      return res.status(403).json({
        message: 'connexion error',
      });
  }

  res.json(req.body);
});

module.exports = loginRouter;
