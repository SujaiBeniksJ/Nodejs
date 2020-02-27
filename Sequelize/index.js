const EngineerTable = require("./models/EngineerModel.js");

const ProjectTable = require("./models/ProjectModel");

const ManagerTable = require("./models/MangerModel");

const {
  findEngineersByProject,
  assignManagerToProject,
  deleteEmployeeDetails,
  updateEmployeeDetails,
  deleteProject
} = require("./queries");

ProjectTable.hasMany(EngineerTable, {foreignKey: "Pid"});
ProjectTable.hasOne(ManagerTable);

// EngineerTable.sync()
// .then(()=>{
//   return ProjectTable.sync();
// })
// .then(()=>{
//   return ManagerTable.sync();
// });



// Function used to display the engineers which are belonging to particular project

findEngineersByProject("Project2");

// Function used to assign manager to project or create a new manager row if it is managerid is not there in existing object

// assignManagerToProject(2, 3, "Manager2");

// Function used to delete the particular emplyee details

// deleteEmployeeDetails(4);

// Function used to update the employee details

// updateEmployeeDetails(5, "updated manger", 2);

// Function used to delete Project

// deleteProject("Project3");