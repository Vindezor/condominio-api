const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('type_user',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            type_user: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};