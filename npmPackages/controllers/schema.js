let tokenInput = {
    "properties": {
        "input": {
            "type": ["number", "string"],
            "maxLength": 10,
        }
    }
};

let tokenValidation = {
    "properties": {
        "token": {
            "type": "string",
            "minLength": 10
        }
    }
};

let multiple10input = {
    "type": "integer",
    "maximum": 99999,
    "minimum": -99999
};

let occurenceCounterInput = {
    "properties": {
        "input": {
            "type": "string",
            "maxLength": 100,
            "minLength": 1
        }
    }
};

let checkArmStrongInput = {
    "type": "integer",
    "minimum": 0,
    "maximum": 99999
};

module.exports = {
    tokenInput,
    tokenValidation,
    multiple10input,
    occurenceCounterInput,
    checkArmStrongInput,
};