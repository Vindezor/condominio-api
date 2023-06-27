const { DataTypes } = require('sequelize');
const { TypeUser } = require('../db/sequelize');

module.exports = (sequelize) => {
    return sequelize.define('user',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            id_type_user: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
                // references: {
                //     model: TypeUser,
                //     key: 'id_type_user',
                // }
            }
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
};