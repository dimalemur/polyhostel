const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rooms', {
    room_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "unique_room_name"
    }
  }, {
    sequelize,
    tableName: 'rooms',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rooms_pkey",
        unique: true,
        fields: [
          { name: "room_id" },
        ]
      },
      {
        name: "unique_room_name",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
