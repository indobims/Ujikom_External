import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
// import Transaksi from './Payment.js'; // Import model Transaksi
// import Product from './product.js'; // Import model Product

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cardCVC: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cardExpMonth: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cardExpYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

// Define associations
// Order.belongsTo(Transaksi, { foreignKey: 'productId' }); // Many-to-One relationship
// Order.belongsTo(Product, { foreignKey: 'productId' }); // Many-to-One relationship

export default Order;
