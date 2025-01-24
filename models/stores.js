const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Stores extends Model {}

Stores.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
     
      primaryKey: true,
      type: DataTypes.UUID
    },
    storeName: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique:true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'stores', // We need to choose the model name
  },
);

module.exports = Stores;  // Export the model so it can be used elsewhere