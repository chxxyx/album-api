'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// model 가져오는 코드

// 관계 선언

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
