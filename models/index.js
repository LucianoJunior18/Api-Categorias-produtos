'use strict';
require('dotenv').config();
const { Sequelize } = require('sequelize');

const dialect = process.env.DB_DIALECT || 'sqlite';

const options = { dialect };

if (dialect === 'sqlite') {
  options.storage = process.env.SQLITE_STORAGE || './database.sqlite';
} else {
  options.host = process.env.DB_HOST;
  options.port = process.env.DB_PORT;
  options.username = process.env.DB_USER;
  options.password = process.env.DB_PASS;
  options.database = process.env.DB_NAME;
}

const sequelize = new Sequelize(options);

const Category = require('./category')(sequelize);
const Product = require('./product')(sequelize);

// Associations
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products', onDelete: 'CASCADE' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = {
  sequelize,
  Sequelize,
  Category,
  Product
};