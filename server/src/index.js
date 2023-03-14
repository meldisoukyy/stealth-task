const process = require('process');

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT);