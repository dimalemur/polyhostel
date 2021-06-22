const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_rec', {
    events_rec_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'events',
        key: 'event_id'
      }
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'events_rec',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "events_rec_pkey",
        unique: true,
        fields: [
          { name: "events_rec_id" },
        ]
      },
    ]
  });
};
