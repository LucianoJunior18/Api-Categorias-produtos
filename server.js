require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');
const logger = require('./middleware/logger');
const routes = require('./routes');

app.use(express.json());
app.use(logger);
app.use('/', routes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
}

start();