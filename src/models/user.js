const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: "author_id",
        as: "author",
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['passwordHash'],
      }
    }
  });
  return User;
};
