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

module.exports = {
  countOccurence,
  armstrongNum,
  getMultiple10
};