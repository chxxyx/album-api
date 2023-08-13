import { DataTypes } from 'sequelize';

const photoModel = (sequelize) => {

    const Photo = sequelize.define('photo', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        file_name: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        file_size: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        original_url: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        thumb_url: {
            type: DataTypes.STRING(255),
            allowNull: true,
        }
    },
    {
        freezeTableName: true, // 이건 true로 안 하면 visitors와 같이 복수형이 된다.
    });

    return Photo;
}

export {
    photoModel as Photo,
};