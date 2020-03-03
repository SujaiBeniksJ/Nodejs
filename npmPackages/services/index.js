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

let getMultiple10 = (input) => {
    let i = 1;
    let output = [];
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