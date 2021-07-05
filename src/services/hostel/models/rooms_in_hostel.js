const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rooms_in_hostel', {
    room_in_hostel_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rooms',
        key: 'room_id'
      },
      unique: "unique_hostel_room"
    },
    hostel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'hostel',
        key: 'hostel_id'
      },
      unique: "unique_hostel_room"
    }
  }, {
    sequelize,
    tableName: 'rooms_in_hostel',
    timestamps: false,
    indexes: [
      {
        name: "rooms_in_hostel_pkey",
        unique: true,
        fields: [
          { name: "room_in_hostel_id" },
        ]
      },
      {
        name: "unique_hostel_room",
        unique: true,
        fields: [
          { name: "room_id" },
          { name: "hostel_id" },
        ]
      },
    ]
  });
};
