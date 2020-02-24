let schema1 = {
    "properties": {
        "input": {
            "type": ["number", "string"],
            "maxLength": 10,
        }
    }
};

let schema2 = {
    "properties": {
        "token": {
            "type": "string",
            "minLength": 10
        }
    }
};

let schema3 = {
    "type": "integer",
    "maximum": 99999,
    "minimum": -99999
};

let schema4 = {
    "properties": {
        "input": {
            "type": "string",
            "maxLength": 100,
            "minLength": 1
        }
    }
};

let schema5 = {
    "type": "integer",
    "minimum": 0,
    "maximum": 99999
};

module.exports = {
    schema1,
    schema2,
    schema3,
    schema4,
    schema5,
};