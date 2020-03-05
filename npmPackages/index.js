const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const router = require("./routes/index.js");



app.use(bodyParser.json());



app.use("/", router);



app.listen("3001", () => {
  console.log("Server Connected");
});
