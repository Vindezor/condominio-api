const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('type_amount',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            type_amount: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            symbol: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};