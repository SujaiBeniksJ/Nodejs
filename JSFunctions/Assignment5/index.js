
// This function is responsible for converting object to JSON where object is passed as argument
function objectToJSON(obj,result) {
    result += "{";
    Object.keys(obj).map(key => {
        if (typeof obj[key] !== "object") {
            result = printPrimitiveInJSON(key, obj,result);
        }
        else {
            if (Array.isArray(obj[key])) {
                result += `"${key}": `;
                result = arrayToJSON(obj[key], result);
            }
            else {
                result = printObjectInJSON(key, obj[key], result);
            }
        }
        if (typeof obj[key] !== "undefined")
            result += ",";
    });
    if(result[result.length-1] === ",")
    result = result.slice(0, result.length - 1);
    result += "}";
    return result;
}

// This Function is responsible for converting array to JSON where array is passed as argument
function arrayToJSON(arr, result) {
    result += "[";
    arr.map(val => {
        if (typeof val !== "object") {
            result = printArrayInJSON(val, result);
        }
        else {
            if (val === null)
                result += "null";
            else if (Array.isArray(val))
                result = arrayToJSON(val, result);
            else {
                result = objectToJSON(val, result);
            }
        }
        result += ",";
    });
    if(result[result.length-1] === ",")
    result = result.slice(0, result.length - 1);
    result += "]";
    return result;
}


// These three functions are responsible printing the format of JSON
function printObjectInJSON(key, obj, result) {
    if (obj === null) {
        result += `"${key}": ${obj}`;
    }
    else if (!Array.isArray(obj[key])) {
        result += `"${key}": `;
        result = objectToJSON(obj, result);
    }
    return result;
}

function printPrimitiveInJSON(key, obj, result) {
    if (typeof obj[key] !== "object") {
        if (typeof obj[key] === "string") {
            result += `"${key}": "${obj[key]}"`;
        }
        else {
            if (typeof obj[key] !== "undefined")
                result += `"${key}": ${obj[key]}`;
        }
    }
    return result;
}

function printArrayInJSON(val, result) {
    if (typeof val !== "object") {
        if (typeof val === "string") {
            result += `"${val}"`;
        }
        else {
            if (typeof val !== "undefined")
                result += `${val}`;
            else
                result += "null";
        }
    }
    return result;
}

//initial function that start the recursive call
function printValidJson(input) {
    let result="";
    if(typeof input === "object" && input!==null){
        if (Array.isArray(input)) {
        result=arrayToJSON(input, result);
    }
    else {
        result=objectToJSON(input, result);
    }
}
else{
    if(input !== undefined)
    result=input;
}
return result;
}


//sample Input
let input = {
    input: [[{
        num: [1,
            "abc",
            null,
            {
                name: "john",
                age: 15,
                id: "123",
                "apply": true,
                "valid": null,
                invalid: undefined,
                marks: {
                    theory: 80,
                    practicl: 80,
                    num: [1, 2,
                        {
                            name: "John",
                            age: 15
                        }
                        , 4, 5]
                },
            }
            ,
            [1, 2, "3", null, 5]
        ],
        "name": "john",
        "age": 15,
        id: "123",
        apply: true,
        valid: null,
        invalid: undefined,
        marks: {
            theory: 80,
            practicl: 80,
            num: [1, 2, 3, 4, 5]
        },
        num1: [1,
            "abc",
            null,
            {
                name: "john",
                age: 15,
                id: "123",
                "apply": true,
                "valid": null,
                invalid: undefined,
                marks: {
                    theory: 80,
                    practicl: 80,
                    num: [1, 2,
                        {
                            name: "John",
                            age: 15
                        }
                        , 4, 5]
                },
            }
            ,
            [1, 2, "3", null, 5]
        ]
    }],
    [1,
        "abc",
        null,
        {
            name: "john",
            age: 15,
            id: "123",
            "apply": true,
            "valid": null,
            invalid: undefined,
            marks: {
                theory: 80,
                practicl: 80,
                num: [1, 2,
                    {
                        name: "John",
                        age: 15
                    }
                    , 4, 5]
            },
        }
        ,
        [1, 2, "3", null, undefined]
    ]]
};

//printing the result
console.log("The Json Object is: ");
console.log(printValidJson(input, ""));