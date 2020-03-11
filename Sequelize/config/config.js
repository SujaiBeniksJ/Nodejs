// require("dotenv").config();
const config = require("../config.js");

module.exports = {
  development: {
    username: config.username,
    password: config.password,
    database: config.dbName,
    host: config.host,
    dialect: config.db,
    operatorsAliases: false
  },
  test: {
    username: config.username,
    password: config.password,
    database: config.dbName,
    host: config.host,
    dialect: config.db,
    operatorsAliases: false
  },
  production: {
    username: config.username,
    password: config.password,
    database: config.dbName,
    host: config.host,
    dialect: config.db,
    operatorsAliases: false
  }
};