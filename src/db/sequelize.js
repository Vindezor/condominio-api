const { Sequelize } = require('sequelize');
const UserModel = require('../models/user');
const TypeUserModel = require('../models/type_user');
const OwnerModel = require('../models/owner');
const TypePropertyModel = require('../models/type_property');
const PropertyModel = require('../models/property');
const OwnerPropertyModel = require('../models/owner_property');

// Example for sqlite
const sequelize = new Sequelize('postgres://postgres:pass@localhost:5432/db')
//sequelize.sync().then(console.log('DB is synced'));

/// MODELS ///
const TypeUser = TypeUserModel(sequelize);
const User = UserModel(sequelize);
const Owner = OwnerModel(sequelize);
const TypeProperty = TypePropertyModel(sequelize);
const Property = PropertyModel(sequelize);
const OwnerProperty = OwnerPropertyModel(sequelize);

/// RELATIONS ///
User.belongsTo(TypeUser, { foreignKey: 'id_type_user' });
User.belongsTo(Owner, { foreignKey: 'id_owner' });
Property.belongsTo(TypeProperty, { foreignKey: 'id_type_property' });
OwnerProperty.belongsTo(Owner, { foreignKey: 'id_owner' });
OwnerProperty.belongsTo(Property, { foreignKey: 'id_property' });
// TypeUser.belongsTo(User);
/**
 * Uncomment this in order to generate table
 */
// sequelize.sync().then(logger('DB is synced'));

module.exports = {User, TypeUser, Owner, TypeProperty, Property, OwnerProperty, sequelize};