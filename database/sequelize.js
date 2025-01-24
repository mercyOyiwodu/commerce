const { Sequelize } = require('sequelize');


const sequelize = new Sequelize("commerce", 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;