const Sequelize = require("sequelize");
const sequelize = require("../connection.js");

const ProjectTable = sequelize.define("Projects", {
  Pid: {
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

module.exports = ProjectTable;