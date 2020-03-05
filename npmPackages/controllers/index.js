const jwt = require("jsonwebtoken");

const privateKey = "shhhhh";
let publicKey;

const { countOccurence,
  armstrongNum,
  getMultiple10 } = require("../services/index.js");

const processTokenInput = (req, res) => {
  publicKey = req.body;
  // Token generated will get expired in 30 seconds
  jwt.sign(publicKey, privateKey, { expiresIn: 30 }, (err, token) => {
    res.send({
      success: true,
      token
    });
  });
};

const processTokenValidation = (req, res) => {
  jwt.verify(req.query.token, "shhhhh", (err, decoded) => {
    if (err) res.send("Token expired! Login Again");
    else if (decoded.input === "hello")
      res.send("Authentication passed");
    else
      res.send("Authentication Failed");
  });
};

const processMultiple10 = (req, res) => {
  const output = getMultiple10(req.params.input);
  res.send(output);
};

const processOccurenceCounter = (req, res) => {
  const str = req.body.input.trim().toLowerCase();
  res.send(countOccurence(str));
};

const processCheckArmstrong = (req, res) => {
  const num = req.params.num;
  if (armstrongNum(num))
    res.send(`${num} is an armstrong number`);
  else
    res.send(`${num} is not an armstrong number`);
};

module.exports = {
  processTokenInput,
  processTokenValidation,
  processMultiple10,
  processOccurenceCounter,
  processCheckArmstrong
};