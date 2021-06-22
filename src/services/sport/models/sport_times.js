const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sport_times', {
    sport_time_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
      unique: "unique__sport_time_interval"
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
      unique: "unique__sport_time_interval"
    }
  }, {
    sequelize,
    tableName: 'sport_times',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sport_times_pkey",
        unique: true,
        fields: [
          { name: "sport_time_id" },
        ]
      },
      {
        name: "unique__sport_time_interval",
        unique: true,
        fields: [
          { name: "start_time" },
          { name: "end_time" },
        ]
      },
    ]
  });
};
