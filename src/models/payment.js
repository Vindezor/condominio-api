const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('payment',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            reference: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            amount: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            id_type_payment: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_type_amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};