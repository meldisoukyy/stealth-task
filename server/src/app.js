require('dotenv').config();

const express = require('express');

const app = express();

const logger = require('./logger');
require('./v1/models');
const v1Routes = require('./v1/routes');

app.use(express.json());
app.use(logger());
app.use('/v1', v1Routes);

module.exports = app;