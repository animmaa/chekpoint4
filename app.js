const express = require('express');
const dishesRouter = require('./routers/dishesRouter');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/api/dishes', dishesRouter)


app.listen(port, () => {
  console.log(`Server run on ${port}`);
});

