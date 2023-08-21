import { DataTypes } from 'sequelize';

const albumModel = (sequelize) => {

    const Album = sequelize.define('album', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        album_name: {
            type: DataTypes.STRING(63),
            allowNull: true,
        },
    },
    {
        freezeTableName: true, // 이건 true로 안 하면 visitors와 같이 복수형이 된다.
    });

    return Album;
}

export {
    albumModel as Album,
};