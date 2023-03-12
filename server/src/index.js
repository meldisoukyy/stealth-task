require('dotenv').config();

const process = require('process');

const express = require('express');

const { logger } = require('./logger.js');
const { v1Routes } = require('./v1/routes/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger());
app.use('/v1', v1Routes);

app.listen(PORT);