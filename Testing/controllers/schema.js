const tokenInput = {
  "properties": {
    "input": {
      "type": ["number", "string"],
      "maxLength": 10,
    }
  }
};

const tokenValidation = {
  "properties": {
    "token": {
      "type": "string",
      "minLength": 10
    }
  }
};

const multiple10input = {
  "type": "integer",
  "maximum": 99999,
  "minimum": -99999
};

const occurenceCounterInput = {
  "type": "object",
  "properties": {
    "input": {
      "type": "string",
      "maxLength": 100,
      "minLength": 1
    },
  },
  "required": ["input"]
};

const checkArmStrongInput = {
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