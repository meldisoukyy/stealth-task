const process = require('process');

const { Sequelize } = require('sequelize');

const config = require('../config/config.json');

const db = {};
let dbConfig;

if (process.env.NODE_ENV === 'development') {
  dbConfig = config['development-db'];
}

const sequelize = new Sequelize({
  ...dbConfig,
  benchmark: true,
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database is connected successfully!');
  } catch (err) {
    throw new Error('Can\'t establish the connection to the database!');
  }
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.testConnection = testConnection;
module.exports = db;