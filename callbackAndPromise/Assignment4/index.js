let add = (num1, num2, callback) => {
    return new Promise((res, rej) => {
        if(callback(num1, num2))
            res(`The Sum of Two numbers is ${num1 + num2}`);
        else
            rej(new Error("The Provided numbers are not valid"));
    });
};

let checkValue = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2))
        return false;
    else
        return true;
};

add(3,5,checkValue)
.then((data) => console.log(data))
.catch((err) => console.log(`The line will not be reached: ${err}`));

add("abc",5,checkValue)
.then((data) => console.log(data))
.catch((err) => console.log(`Error Caught: ${err}`));