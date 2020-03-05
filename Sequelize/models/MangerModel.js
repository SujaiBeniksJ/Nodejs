const Sequelize = require("sequelize");
const sequelize = require("../connection.js");
const ProjectTable = require("./ProjectModel");

const ManagerTable = sequelize.define("Managers", {
  Mid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
  },
  Pid: {
    type: Sequelize.INTEGER
  }
},
{
  timestamps: false
});

ManagerTable.associate = function() {
  ProjectTable.hasOne(ManagerTable, {foreignKey: "Pid"});
};

module.exports = ManagerTable;