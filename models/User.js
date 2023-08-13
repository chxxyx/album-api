import { DataTypes } from 'sequelize';

const userModel = (sequelize) => {

    const User = sequelize.define('user', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        useremail: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        }

    },
    {
        freezeTableName: true,
    });

    return User;
}

export {
    userModel as User,
};