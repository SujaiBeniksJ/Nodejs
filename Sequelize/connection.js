const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config.dbName, config.username, config.password,{
  host: config.host,
  dialect: config.db
});

module.exports = sequelize;