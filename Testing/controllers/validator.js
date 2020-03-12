const schema = require("./schema");
const services = require("../services/index");

const tokenInputValidator = (req, res, next) => {
  if(services.ajvValidator(schema.tokenInput, req.body, next)){
    next();
  }
};

const tokenValidationValidator = (req, res, next) => {
  if(services.ajvValidator(schema.tokenValidation, req.query, next))
    next();
};

const multiple10inputValidator = (req, res, next) => {
  if(services.ajvValidator(schema.multiple10input, Number(req.params.input), next))
    next();
};

const occurenceCounterInputValidator = (req, res, next) => {
  if(services.ajvValidator(schema.occurenceCounterInput, req.body, next))
    next();
};

const checkArmstringInputValidator = (req, res, next) => {
  if(services.ajvValidator(schema.checkArmStrongInput, Number(req.params.num), next))
    next();
};

module.exports = {
  tokenInputValidator,
  tokenValidationValidator,
  multiple10inputValidator,
  occurenceCounterInputValidator,
  checkArmstringInputValidator,
};