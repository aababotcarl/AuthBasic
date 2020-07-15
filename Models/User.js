/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(8000),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(8000),
      allowNull: false
    }
  }, {
    tableName: 'User'
  });
};
