const jwt = require("jsonwebtoken");

const privateKey = "shhhhh";
let publicKey;

const services = require("../services/index.js");

const processTokenInput = (req, res) => {
  publicKey = req.body;
  // Token generated will get expired in 24 hrs
  return jwt.sign(publicKey, privateKey, { expiresIn: 60*60*24 }, (err, token) => {
    res.send({
      success: true,
      token
    });
  });
};

const processTokenValidation = async (req, res) => {
  let {err, decoded} = await services.verifyToken(req.query.token);
  // console.log(err, decoded);
  if (err) res.send({success: false, data: "Token expired! Login Again"});
  else if (decoded.input === "hello")
    res.send({success:true, data:"Authentication passed"});
  else
    res.send({success:false, data:"Authentication failed"});
};

const processMultiple10 = (req, res) => {
  // console.log(err)
  const output = services.getMultiple10(req.params.input);
  res.send(output);
};

const processOccurenceCounter = (req, res) => {
  const str = req.body.input.trim().toLowerCase();
  res.send(services.countOccurence(str));
};

const processCheckArmstrong = (req, res) => {
  const num = req.params.num;
  if (services.armstrongNum(num))
    res.send({data: `${num} is an armstrong number`});
  else
    res.send({data: `${num} is not an armstrong number`});
};

module.exports = {
  processTokenInput,
  processTokenValidation,
  processMultiple10,
  processOccurenceCounter,
  processCheckArmstrong
};