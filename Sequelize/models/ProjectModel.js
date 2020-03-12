const Sequelize = require("sequelize");
const sequelize = require("../connection.js");

const EngineerTable = require("./EngineerModel.js");

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

ProjectTable.associate = function() {
  ProjectTable.hasMany(EngineerTable, {foreignKey: "Pid"});
};

module.exports = ProjectTable;