const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wash_rec', {
    wash_rec_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    wash_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wash_times',
        key: 'wash_time_id'
      },
      unique: "unique_wash_rec"
    },
    washer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'washer',
        key: 'washer_id'
      },
      unique: "unique_wash_rec"
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "unique_wash_rec"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE'),
      unique: "unique_wash_rec"
    }
  }, {
    sequelize,
    tableName: 'wash_rec',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "unique_wash_rec",
        unique: true,
        fields: [
          { name: "wash_time_id" },
          { name: "washer_id" },
          { name: "student_id" },
          { name: "date" },
        ]
      },
      {
        name: "wash_rec_pkey",
        unique: true,
        fields: [
          { name: "wash_rec_id" },
        ]
      },
    ]
  });
};
