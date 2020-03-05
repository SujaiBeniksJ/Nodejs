const models = require("./models");

const findEngineersByProject = (pname) => {
  models.ProjectModel.findAll({
    where: {
      name: pname
    },
    attributes: ["Pid"]
  })
    .then((pid) => {
      return models.EngineerModel.findAll({
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
    })
    .catch(err => {
      console.log(`Sorry couldn't find the project${err}`);
    });
};

const assignManagerToProject = (mid, pid, name) => {
  models.ManagerModel.findAll({
    where: {
      Mid: mid
    }
  })
    .then(data => {
      if (data.length) {
        return models.ManagerModel.update({
          Pid: pid
        }, {
          where: {
            Mid: mid
          }
        });
      }
      else {
        return models.ManagerModel.create({
          Mid: mid,
          name: name,
          Pid: pid
        });
      }
    })
    .then(() => {
      return models.ManagerModel.findAll();
    })
    .then(result => {
      console.log("Successfully Inserted or updated: ");
      console.log(JSON.stringify(result, null, 2));
    })
    .catch(err => {
      console.log(`couldn't assign the manager${err}`);
    });
};

const deleteEmployeeDetails = (eid) => {
  models.EngineerModel.destroy({
    where: {
      Eid: eid
    }
  })
    .then(() => {
      console.log(`Employee ${eid} deleted`);
    })
    .then(err=>{
      console.log(`couldn't find the employee${err}`);
    });
};


const updateEmployeeDetails = (eid, ename, pid) => {
  models.EngineerModel.update({
    Eid: eid,
    name: ename,
    Pid: pid
  }, {
    where: {
      Eid: eid
    }
  })
    .then(() => console.log("Employee detail updated"))
    .catch(err => console.log(`Failed to update ${err}`));
};


const deleteProject = (pname) => {
  models.ProjectModel.destroy({
    where: {
      name: pname
    }
  })
    .then(() => {
      console.log(`${pname} deleted`);
    })
    .catch(err => {
      console.log(`Project couldn't be found${err}`);
    });
};

module.exports = {
  findEngineersByProject,
  assignManagerToProject,
  deleteEmployeeDetails,
  updateEmployeeDetails,
  deleteProject
};