import { DataTypes } from 'sequelize';

// sequelize 객체를 인자로 받아서 DB와 연결된 User 모델을 정의하고 반환
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
    userModel as User, // userModel 함수를 'User'라는 이름으로 내보내기 위함
};