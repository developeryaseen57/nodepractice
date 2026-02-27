const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("application", "root", "786Yaseen.", {
  host: "localhost",
  dialect: "mysql",
});

const People = sequelize.define("People", {
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  gender: DataTypes.ENUM("male", "female", "other")
});

async function run() {
  try {
    await sequelize.authenticate();
    console.log("Connected successfully");

    await sequelize.sync();
    console.log("Tables synced");

    await People.create({
      name: "Yaseen",
      email: "yaseen@gmail.com",
      gender: "male"
    });

    await People.create({
      name: "Younas",
      email: "younas@gmail.com",
      gender: "male"
    });

    await People.create({
      name: "Yousaf",
      email: "yousaf@gmail.com",
      gender: "male"
    });

    console.log("Users inserted");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

run();


console.log("yaseen is working");

console.log("new branch")
