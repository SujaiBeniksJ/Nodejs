const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const router = require("./routes/index.js");



app.use(bodyParser.json());

app.use("/", router);
app.use("/*", (req, res) => res.sendStatus(404));


let appstarted,server={};

app.use((err, req, res, next) => {
  res.status(400);
  res.send("Oops, Bad Request");
});
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