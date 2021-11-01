'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
    }
  };
  Post.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    imageSeed: DataTypes.STRING,
    content: DataTypes.TEXT,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};