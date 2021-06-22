const DataTypes = require("sequelize").DataTypes;
const _wash_rec = require("./wash_rec");
const _wash_times = require("./wash_times");
const _washer = require("./washer");
const sequelize = require('../db')

const WashRec = _wash_rec(sequelize, DataTypes);
const WashTimes = _wash_times(sequelize, DataTypes);
const Washer = _washer(sequelize, DataTypes);

WashRec.belongsTo(WashTimes, {as: "wash_time", foreignKey: "wash_time_id"});
WashTimes.hasMany(WashRec, {as: "wash_recs", foreignKey: "wash_time_id"});
WashRec.belongsTo(Washer, {as: "washer", foreignKey: "washer_id"});
Washer.hasMany(WashRec, {as: "wash_recs", foreignKey: "washer_id"});

module.exports = {
    WashRec,
    WashTimes,
    Washer
};
