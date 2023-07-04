const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('owner_property',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_owner: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_property: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};