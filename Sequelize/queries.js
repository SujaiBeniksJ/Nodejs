const EngineerTable = require("./models/EngineerModel.js");

const ProjectTable = require("./models/ProjectModel");

const ManagerTable = require("./models/MangerModel");

let findEngineersByProject = (pname) => {
    ProjectTable.findAll({
        where: {
            name: pname
        },
        attributes: ["Pid"]
    })
        .then((pid) => {
            return EngineerTable.findAll({
                where: {
                    Pid: pid[0].Pid
                }
            });
        })
        .then((data) => {
            console.log(`Displaying the Engineers working on ${pname}: `);
            console.log(JSON.stringify(data, null, 2));
            console.log("Engineers are :");
            data.forEach(each => {
                console.log(each.name);
            });
        });
};

let assignManagerToProject = (mid, pid, name) => {
    ManagerTable.findAll({
        where: {
            Mid: mid
        }
    })
        .then(data => {
            if (data.length) {
                return ManagerTable.update({
                    ProjectPid: pid
                }, {
                    where: {
                        Mid: mid
                    }
                });
            }
            else {
                return ManagerTable.create({
                    Mid: mid,
                    name: name,
                    ProjectPid: pid
                });
            }
        })
        .then(() => {
            return ManagerTable.findAll();
        })
        .then(result => {
            console.log("Successfully Inserted or updated: ");
            console.log(JSON.stringify(result, null, 2));
        });
};

let deleteEmployeeDetails = (eid) => {
    EngineerTable.destroy({
        where: {
            Eid: eid
        }
    })
        .then(() => {
            console.log(`Employee ${eid} deleted`);
        });
};


let updateEmployeeDetails = (eid, ename, pid) => {
    EngineerTable.update({
        Eid: eid,
        name: ename,
        Pid: pid
    }, {
        where: {
            Eid: eid
        }
    })
        .then(() => console.log("Employee detail updated"));
};


let deleteProject = (pname) => {
    ProjectTable.destroy({
        where: {
            name: pname
        }
    })
        .then(() => {
            console.log(`${pname} deleted`);
        });
};

module.exports = {
    findEngineersByProject,
    assignManagerToProject,
    deleteEmployeeDetails,
    updateEmployeeDetails,
    deleteProject
};