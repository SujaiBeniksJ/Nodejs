const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const router = require("./routes/index.js");



app.use(bodyParser.json());



app.use("/", router);
let appstarted,server={};
server.start = () => {
  appstarted = app.listen(3001, ()=>{
    console.log("Server Started");
  });
};

server.stop = () => {
  appstarted.close();
};

server.start();

module.exports = {server, app};