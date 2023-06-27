const { Sequelize } = require('sequelize');
const UserModel = require('../models/user');
const TypeUserModel = require('../models/type_user');
// Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@ip:port/db')
//sequelize.sync().then(console.log('DB is synced'));
const TypeUser = TypeUserModel(sequelize);
const User = UserModel(sequelize);
User.belongsTo(TypeUser, {
    foreignKey: 'id_type_user'
});
// TypeUser.belongsTo(User);
/**
 * Uncomment this in order to generate table
 */
// sequelize.sync().then(logger('DB is synced'));

module.exports = {User, TypeUser, sequelize};