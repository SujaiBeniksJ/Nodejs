const schema = require("./schema");
const Ajv = require("ajv");

const ajv = new Ajv();

let ajvValidator = (schema, input, res) => {
    var valid = ajv.validate(schema, input);
    if (!valid) {
        res.sendStatus(400);
    }
    return valid;
};

let tokenInputValidator = (req, res, next) => {
    if(ajvValidator(schema.tokenInput, req.body, res))
        next();
};

let tokenValidationValidator = (req, res, next) => {
    if(ajvValidator(schema.tokenValidation, req.query, res))
        next();
};

let multiple10inputValidator = (req, res, next) => {
    if(ajvValidator(schema.multiple10input, Number(req.params.input), res))
        next();
};

let occurenceCounterInputValidator = (req, res, next) => {
    if(ajvValidator(schema.occurenceCounterInput, req.body, res))
        next();
};

let checkArmstringInputValidator = (req, res, next) => {
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