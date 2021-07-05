const DataTypes = require("sequelize").DataTypes;
const _students = require("./students");
const _users = require("./users");
const sequelize = require('../db')

console.log(sequelize)

const Students = _students(sequelize, DataTypes);
const Users = _users(sequelize, DataTypes);


Students.belongsTo(Users, {as: "user", foreignKey: "user_id"});
Users.hasMany(Students, {as: "students", foreignKey: "user_id"});

module.exports = {
    Students,
    Users
};
