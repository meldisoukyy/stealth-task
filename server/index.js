const express = require('express');
const process = require('process');
const { logger } = require('./logger.js');

const app = express();

if (process.env.NODE_ENV === 'development')
  app.use(logger());

app.get('/', (req, res) => {
  res.send('Hello, Friend!');
});

app.listen(3000);