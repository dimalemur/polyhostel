const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hostel', {
    hostel_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "unique_hostel_name"
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hostel',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "hostel_pkey",
        unique: true,
        fields: [
          { name: "hostel_id" },
        ]
      },
      {
        name: "unique_hostel_name",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
