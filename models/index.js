import Sequelize from 'sequelize';
import config from '../config/config.js'; // 또는 설정 파일의 경로로 변경해주세요

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
  }
);

const db = {};

// 모델들 import 및 정의

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;