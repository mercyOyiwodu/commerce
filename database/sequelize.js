const { Sequelize } = require('sequelize');


const sequelize = new Sequelize("sql7759397", 'sql7759397', 'xxu1gHmFCc', {
    host: 'sql7.freesqldatabase.com',
    dialect: 'mysql'
  });

module.exports = sequelize;