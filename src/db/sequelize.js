const { Sequelize } = require('sequelize');
const UserModel = require('../models/user');
const TypeUserModel = require('../models/type_user');
const OwnerModel = require('../models/owner');
const TypePropertyModel = require('../models/type_property');
const PropertyModel = require('../models/property');
const OwnerPropertyModel = require('../models/owner_property');

// Example for sqlite
const sequelize = new Sequelize('postgres://postgres:pass3@localhost:5432/db')
//sequelize.sync().then(console.log('DB is synced'));
const TypeUser = TypeUserModel(sequelize);
const User = UserModel(sequelize);
const Owner = OwnerModel(sequelize);
const TypeProperty = TypePropertyModel(sequelize);
const Property = PropertyModel(sequelize);
const OwnerProperty = OwnerPropertyModel(sequelize);
User.belongsTo(TypeUser, {
    foreignKey: 'id_type_user'
});
// TypeUser.belongsTo(User);
/**
 * Uncomment this in order to generate table
 */
// sequelize.sync().then(logger('DB is synced'));

module.exports = {User, TypeUser, Owner, TypeProperty, Property, OwnerProperty, sequelize};