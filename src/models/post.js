'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {

    }
  };
  Post.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    image_seed: DataTypes.STRING,
    content: DataTypes.TEXT,
    description: DataTypes.TEXT,
    author_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};