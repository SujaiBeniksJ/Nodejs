const Sequelize = require("sequelize");
const sequelize = require("../connection.js");

const EngineerTable = sequelize.define("Engineer", {
    Eid: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT,
    }
  },
  {
    timestamps: false
  });

  module.exports = EngineerTable;