const { Model, DataTypes } = require("sequalize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    //   primaryKey: true,
      autoIncrement: true,
    },
    comment_author: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: "user",
          key: "id",
      } 
      //Need to reference post model as well?
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comments",
  }
);

module.exports = Comment;