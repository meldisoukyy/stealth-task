const process = require('process');

const app = require('./app');
const db = require('./v1/models');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await db.testConnection();
    app.listen(PORT);
    console.log('Server is connected successfully!');
  } catch (err) {
    console.error('Error: Can\'t establish the connection to the server!');
  }
})();