const DataTypes = require("sequelize").DataTypes;
const _hostel = require("./hostel");
const _rooms = require("./rooms");
const _rooms_in_hostel = require("./rooms_in_hostel");
const sequelize = require('../db')

const Hostel = _hostel(sequelize, DataTypes);
const Rooms = _rooms(sequelize, DataTypes);
const RoomsInHostel = _rooms_in_hostel(sequelize, DataTypes);

RoomsInHostel.belongsTo(Hostel, {as: "hostel", foreignKey: "hostel_id"});
Hostel.hasMany(RoomsInHostel, {as: "rooms_in_hostels", foreignKey: "hostel_id"});
RoomsInHostel.belongsTo(Rooms, {as: "room", foreignKey: "room_id"});
Rooms.hasMany(RoomsInHostel, {as: "rooms_in_hostels", foreignKey: "room_id"});


module.exports = {
    Hostel,
    Rooms,
    RoomsInHostel
};