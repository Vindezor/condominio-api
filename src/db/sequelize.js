const { Sequelize } = require('sequelize');
const UserModel = require('../models/User');
// Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@ip:port/db')
//sequelize.sync().then(console.log('DB is synced'));
const User = UserModel(sequelize);

/**
 * Uncomment this in order to generate table
 */
// sequelize.sync().then(logger('DB is synced'));

module.exports = {User, sequelize};