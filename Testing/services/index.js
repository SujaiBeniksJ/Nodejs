const jwt = require("jsonwebtoken");
const Ajv = require("ajv");

const ajv = new Ajv();

const ajvValidator = (schema, input, next) => {
  let valid = ajv.validate(schema, input);
  if (!valid) {
    return next(new Error(valid));
  }
  return valid;
};

const countOccurence = (str) => {
  const strArr = str.split("");
  const result = {};
  strArr.forEach(ch => {
    if(ch !== " ")
      result[ch] = (typeof result[ch] === "number") ? ++result[ch] : 1;
  });
  return(result);
};

const armstrongNum = (num) => {
  const len = num.length;
  const numArr = num.split("");
  let result = 0;
  numArr.map(val => {
    result += Number(val) ** len;
  });
  if(result === Number(num))
    return true;
  else
    return false;
};

const getMultiple10 = (input) => {
  let i = 1;
  const output = [];
  while (i <= 10) {
    output.push(input * i);
    i += 1;
  }
  return output;
};

const verifyToken = (token) => {
  console.log("hi");
  // istanbul ignore next
  return jwt.verify(token, "shhhhh", (err, decoded) => {
    console.log("here");
    return {err, decoded};
  });
};

module.exports = {
  countOccurence,
  armstrongNum,
  getMultiple10,
  verifyToken,
  ajvValidator
};