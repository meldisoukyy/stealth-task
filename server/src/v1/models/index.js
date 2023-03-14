const process = require('process');

const { Sequelize } = require('sequelize');

const config = require('../config/config.json');

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
    console.log('Database connected successfully!');
  } catch (err) {
    console.error('Error: Can\'t establish the connection to the database!');
  }
};

testConnection();

module.exports = sequelize;