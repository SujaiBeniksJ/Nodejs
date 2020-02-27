const Sequelize = require("sequelize");
const sequelize = require("../connection.js");

const ManagerTable = sequelize.define("Manager", {
    Mid: {
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

  module.exports = ManagerTable;