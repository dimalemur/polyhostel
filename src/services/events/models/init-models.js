const DataTypes = require("sequelize").DataTypes;
const _events = require("./events");
const _events_rec = require("./events_rec");
const sequelize = require('../db')

const Events = _events(sequelize, DataTypes);
const EventsRec = _events_rec(sequelize, DataTypes);

EventsRec.belongsTo(Events, {as: "event", foreignKey: "event_id"});
Events.hasMany(EventsRec, {as: "events_recs", foreignKey: "event_id"});


module.exports = {
    Events,
    EventsRec
};