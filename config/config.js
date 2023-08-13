import dotenv from 'dotenv';
import Sequelize from 'sequelize';
import { User } from '../models/User.js';
import { Photo } from '../models/Photo.js';
import { Album } from '../models/Album.js';

dotenv.config();  // .env 파일의 환경 변수 로드

const dbHost = process.env.MYSQL_HOST;
const dbUser = process.env.MYSQL_USERNAME;
const dbPass = process.env.MYSQL_PASSWORD;
const dbName = process.env.MYSQL_DATABASE;

// sequelize 객체 생성
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: 'mysql',
});

const db = {};

// User, Photo, Album 모델을 Sequelize 객체와 연결하여 DB 생성, 관리
db.User = User(sequelize, Sequelize); 
db.Photo = Photo(sequelize, Sequelize);
db.Album = Album(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;