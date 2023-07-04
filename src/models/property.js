const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('property',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            property: {
                type: DataTypes.STRING,
                allowNull: false,
            },
           id_type_property: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};