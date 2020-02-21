let jsonObj = "";

function objectToJSON(obj) {
    jsonObj += "{";
    Object.keys(obj).map(key => {
        if (typeof obj[key] !== "object") {
            notAnObject(key, obj);
        }
        else {
            if (Array.isArray(obj[key])) {
                jsonObj += `"${key}": `;
                anArray(obj[key]);
            }
            else {
                anObject(key, obj[key]);
            }
        }
        if (typeof obj[key] !== "undefined")
            jsonObj += ",";
    });
    jsonObj = jsonObj.slice(0, jsonObj.length - 1);
    jsonObj += "}";
}

function anObject(key, obj) {
    if (obj === null) {
        jsonObj += `"${key}": ${obj}`;
    }
    else if (!Array.isArray(obj[key])) {
        jsonObj += `"${key}": `;
        objectToJSON(obj);
    }
}

function anArray(arr) {
    jsonObj += "[";
    arr.map(val => {
        if (typeof val !== "object") {
            notAnObjectArr(val);
        }
        else {
            if (val === null)
                jsonObj += "null";
            else if (Array.isArray(val))
                anArray(val);
            else {
                objectToJSON(val);
            }
        }
        jsonObj += ",";
    });
    jsonObj = jsonObj.slice(0, jsonObj.length - 1);
    jsonObj += "]";
}

function notAnObject(key, obj) {
    if (typeof obj[key] !== "object") {
        if (typeof obj[key] === "string") {
            jsonObj += `"${key}": "${obj[key]}"`;
        }
        else {
            if (typeof obj[key] !== "undefined")
                jsonObj += `"${key}": ${obj[key]}`;
        }
    }
}

function notAnObjectArr(val) {
    if (typeof val !== "object") {
        if (typeof val === "string") {
            jsonObj += `"${val}"`;
        }
        else {
            if (typeof val !== "undefined")
                jsonObj += `${val}`;
        }
    }
}


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
        [1, 2, "3", null, 5]
    ]]
};

function printValidJson(input) {
    if (Array.isArray(input)) {
        anArray(input);
    }
    else {
        objectToJSON(input);
    }
}

printValidJson(input);

console.log("The Json Object is: " + jsonObj);