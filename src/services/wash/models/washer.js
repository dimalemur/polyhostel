const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('washer', {
    washer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hostel_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'washer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "washer_pkey",
        unique: true,
        fields: [
          { name: "washer_id" },
        ]
      },
    ]
  });
};
