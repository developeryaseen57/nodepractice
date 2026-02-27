const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  gender:DataTypes.ENUM("male","female","other")
});

