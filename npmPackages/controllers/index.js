let countOccurence = (str) => {
    let strArr = str.split("");
    let result = {};
    strArr.forEach(ch => {
        if(ch !== " ")
        result[ch] = (typeof result[ch] === "number") ? ++result[ch] : 1;
    });
    return(result);
};

let armstrongNum = (num) => {
    let len = num.length;
    let numArr = num.split("");
    let result = 0;
    numArr.map(val => {
        result += Number(val) ** len;
    });
    if(result === Number(num))
    return true;
    else
    return false;
};

module.exports = {
    countOccurence,
    armstrongNum
};