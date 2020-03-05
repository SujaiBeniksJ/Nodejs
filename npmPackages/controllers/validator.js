const schema = require("./schema");
const Ajv = require("ajv");

const ajv = new Ajv();

const ajvValidator = (schema, input, res) => {
  var valid = ajv.validate(schema, input);
  if (!valid) {
    res.sendStatus(400);
  }
  return valid;
};

const tokenInputValidator = (req, res, next) => {
  if(ajvValidator(schema.tokenInput, req.body, res))
    next();
};

const tokenValidationValidator = (req, res, next) => {
  if(ajvValidator(schema.tokenValidation, req.query, res))
    next();
};

const multiple10inputValidator = (req, res, next) => {
  if(ajvValidator(schema.multiple10input, Number(req.params.input), res))
    next();
};

const occurenceCounterInputValidator = (req, res, next) => {
  if(ajvValidator(schema.occurenceCounterInput, req.body, res))
    next();
};

const checkArmstringInputValidator = (req, res, next) => {
  if(ajvValidator(schema.checkArmStrongInput, Number(req.params.num), res))
    next();
};

module.exports = {
  tokenInputValidator,
  tokenValidationValidator,
  multiple10inputValidator,
  occurenceCounterInputValidator,
  checkArmstringInputValidator
};