// eslint-disable-next-line no-unused-vars
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    student_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    room_in_hostel_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "unique_full_name"
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "unique_full_name"
    },
    patronymic: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: "unique_full_name"
    }
  }, {
    sequelize,
    tableName: 'students',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "students_pkey",
        unique: true,
        fields: [
          { name: "student_id" },
        ]
      },
      {
        name: "unique_full_name",
        unique: true,
        fields: [
          { name: "name" },
          { name: "surname" },
          { name: "patronymic" },
        ]
      },
    ]
  });
};
