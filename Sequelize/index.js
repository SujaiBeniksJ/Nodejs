// const EngineerTable = require("./models/EngineerModel.js");

// const ProjectTable = require("./models/ProjectModel");

// const ManagerTable = require("./models/MangerModel");

const {
  findEngineersByProject,
  assignManagerToProject,
  deleteEmployeeDetails,
  updateEmployeeDetails,
  deleteProject
} = require("./queries");

// ProjectTable.hasMany(EngineerTable, {foreignKey: "Pid"});
// ProjectTable.hasOne(ManagerTable, {foreignKey: "Pid"});

// ProjectTable.sync({force: true})
// .then(()=>{
//   return EngineerTable.sync({force: true});
// })
// .then(()=>{
//   return ManagerTable.sync({force: true});
// });



// Function used to display the engineers which are belonging to particular project

// 1st param projectName

findEngineersByProject("Project1");

// Function used to assign manager to project or create a new manager row if it is managerid is not there in existing object

// 1st param managerId
// 2nd param projecId
// 3rd param managerName

// assignManagerToProject(2, 1, "Manager3");

// Function used to delete the particular emplyee details

//1st param engineerID

// deleteEmployeeDetails(6);

// Function used to update the employee details

//1st param engineerID
//2nd param newManagerName
//3rd param projectId

// updateEmployeeDetails(6, "updated manager", 2);

// Function used to delete Project

//1st param projectName

// deleteProject("Project2");