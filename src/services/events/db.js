const {Sequelize} = require('sequelize');

const DB_NAME = process.env.DB_EVENTS_NAME;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_PASSWORD = process.env.DB_EVENTS_PASSWORD;

module.exports = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        dialect: 'postgres',
        host: DB_HOST,
        port: DB_PORT,
    }
)