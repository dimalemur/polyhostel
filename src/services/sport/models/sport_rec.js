const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sport_rec', {
    sport_rec_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sport_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sport_times',
        key: 'sport_time_id'
      },
      unique: "unique_sport_rec"
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "unique_sport_rec"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE'),
      unique: "unique_sport_rec"
    }
  }, {
    sequelize,
    tableName: 'sport_rec',
    timestamps: false,
    indexes: [
      {
        name: "sport_rec_pkey",
        unique: true,
        fields: [
          { name: "sport_rec_id" },
        ]
      },
      {
        name: "unique_sport_rec",
        unique: true,
        fields: [
          { name: "sport_time_id" },
          { name: "student_id" },
          { name: "date" },
        ]
      },
    ]
  });
};
