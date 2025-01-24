const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class products extends Model {}

products.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    storeId: {
      type: DataTypes.UUID,
      references:{
        model:"stores",
        key:"id"
      }
    },
    productName: {
      type: DataTypes.STRING
    },
    productQty: {
      type: DataTypes.INTEGER
    },
    productAmount: {
      type: DataTypes.DECIMAL
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'products', // We need to choose the model name
  },
);
module.exports= products;