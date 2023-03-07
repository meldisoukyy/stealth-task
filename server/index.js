const express = require('express');
const { logger } = require('./logger.js');

const app = express();

app.use(logger());

app.get('/', (req, res) => {
  res.send('Hello, Friend!');
});

app.listen(3000);