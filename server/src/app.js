require('dotenv').config();

const express = require('express');

const app = express();

const logger = require('./logger');
const v1Routes = require('./v1/routes/index');

app.use(express.json());
app.use(logger());
app.use('/v1', v1Routes);

module.exports = app;