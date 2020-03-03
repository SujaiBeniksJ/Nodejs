const express = require("express");

const router = express.Router();

const {tokenInputValidator,
    tokenValidationValidator,
    multiple10inputValidator,
    occurenceCounterInputValidator,
    checkArmstringInputValidator} = require("../controllers/validator");

const {processTokenInput,
    processTokenValidation,
    processMultiple10,
    processOccurenceCounter,
    processCheckArmstrong} = require("../controllers/index.js");



router.post("/", tokenInputValidator, processTokenInput);

router.get("/check", tokenValidationValidator, processTokenValidation);

router.get("/multiple10/:input", multiple10inputValidator, processMultiple10);

router.post("/occurenceCounter", occurenceCounterInputValidator, processOccurenceCounter);

router.get("/checkArmStrong/:num", checkArmstringInputValidator, processCheckArmstrong);

module.exports = router;