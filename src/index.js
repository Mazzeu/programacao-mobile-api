const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

routes(app)

// Variable configuration 
const config = require('config');
const port = config.get('api.port');
const mongodb = config.get('dbConnection.mongodb')

// Conection on DB
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('MongoDB Connected');
    return app.listen(port);
  })
  .then(res => {
    console.log(`Server running at http://localhost:${port}`);
  })
