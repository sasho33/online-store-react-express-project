require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const models = require('./models/models'); // models object contains all models
const cors = require('cors'); //for cross origin resource sharing (to add request headers from client to server)
const router = require('./routes/index'); // Import router object from index.js file in routes folder
const fileUpload = require('express-fileupload'); // Import express-fileupload module
const path = require('path');
const errorHandler = require('./middleware/errorHandlingMiddleware');

const PORT = process.env.PORT || 3000;

const app = express(); // Initialize express app
app.use(cors()); // For cross origin resource sharing (to add request headers from client to server)
app.use(express.json()); // Add middleware for parsing JSON
app.use(express.static(path.resolve(__dirname, 'static'))); //serve static files
app.use(fileUpload()); // Upload files middleware
app.use('/api', router); // Add router object to express app

app.use(errorHandler); // Error handler middleware

async function start() {
  try {
    await sequelize.authenticate(); // Authenticate connection to database
    await sequelize.sync(); // Synchronize models with database
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
