const { Sequelize } = require('sequelize');

const db = new Sequelize('bd_scalidad', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});


module.exports = db;