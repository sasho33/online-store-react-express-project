require('dotenv').config(); // Add this line
const express = require('express');
const sequelize = require('./db');

const PORT = process.env.PORT || 3000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
