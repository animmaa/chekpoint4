const express = require('express');
const cors = require('cors');
const dishesRouter = require('./routers/dishesRouter');
const ingredientsRouter = require('./routers/ingredientsRouter');
const loginRouter = require('./routers/admin');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/api/dishes', dishesRouter);
app.use('/api/ingredients', ingredientsRouter);
app.use('/admin', loginRouter);

app.listen(port, () => {
  console.log(`Server run on ${port}`);
});
