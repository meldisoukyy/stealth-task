const express = require('express');
const { logger } = require('./logger.js');
const { v1Routes } = require('./v1/routes/index.js');

const app = express();

app.use(express.json());
app.use(logger());
app.use('/v1', v1Routes);

app.listen(3000);