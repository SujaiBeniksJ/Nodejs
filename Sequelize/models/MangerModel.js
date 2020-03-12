module.exports = (sequelize, Sequelize) => {

  const ManagerTable = sequelize.define("Managers", {
    Mid: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT,
    },
    Pid: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Projects",
        key: "Pid",
      },
      onDelete: "CASCADE",
    }
  },
  {
    timestamps: false
  });

  ManagerTable.associate = function() {
    ManagerTable.hasOne(this.sequelize.models.ProjectTable, {foreignKey: "Pid"});
  };
  return ManagerTable;
};