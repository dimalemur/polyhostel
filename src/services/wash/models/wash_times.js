const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wash_times', {
    wash_time_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
      unique: "unique_time_interval"
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
      unique: "unique_time_interval"
    }
  }, {
    sequelize,
    tableName: 'wash_times',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "unique_time_interval",
        unique: true,
        fields: [
          { name: "start_time" },
          { name: "end_time" },
        ]
      },
      {
        name: "wash_times_pkey",
        unique: true,
        fields: [
          { name: "wash_time_id" },
        ]
      },
    ]
  });
};
