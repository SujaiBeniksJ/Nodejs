module.exports = (sequelize, Sequelize) => {

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
    ProjectTable.hasMany(this.sequelize.models.EngineerTable, {foreignKey: "Pid"});
  };

  return ProjectTable;
};