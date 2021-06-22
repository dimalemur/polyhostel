const DataTypes = require("sequelize").DataTypes;
const _sport_rec = require("./sport_rec");
const _sport_times = require("./sport_times");
const sequelize = require('../db')

const SportRec = _sport_rec(sequelize, DataTypes);
const SportTimes = _sport_times(sequelize, DataTypes);

SportRec.belongsTo(SportTimes, {as: "sport_time", foreignKey: "sport_time_id"});
SportTimes.hasMany(SportRec, {as: "sport_recs", foreignKey: "sport_time_id"});

module.exports = {
    SportRec,
    SportTimes
};