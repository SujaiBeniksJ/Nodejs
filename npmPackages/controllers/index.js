const jwt = require("jsonwebtoken");

let privateKey = "shhhhh";
let publicKey;

const { countOccurence,
    armstrongNum,
    getMultiple10 } = require("../services/index.js");

let processTokenInput = (req, res) => {
    publicKey = req.body;
    // Token generated will get expired in 30 seconds
    jwt.sign(publicKey, privateKey, { expiresIn: 30 }, (err, token) => {
        res.send({
            success: true,
            token
        });
    });
};

let processTokenValidation = (req, res) => {
    jwt.verify(req.query.token, "shhhhh", (err, decoded) => {
        if (err) res.send("Token expired! Login Again");
        else if (decoded.input === "hello")
            res.send("Authentication passed");
        else
            res.send("Authentication Failed");
    });
};

let processMultiple10 = (req, res) => {
    let output = getMultiple10(req.params.input);
    res.send(output);
};

let processOccurenceCounter = (req, res) => {
    let str = req.body.input.trim().toLowerCase();
    res.send(countOccurence(str));
};

let processCheckArmstrong = (req, res) => {
    let num = req.params.num;
    if (armstrongNum(num))
        res.send(`${num} is an armstrong number`);
    else
        res.send(`${num} is not an armstrong number`);
};

module.exports = {
    processTokenInput,
    processTokenValidation,
    processMultiple10,
    processOccurenceCounter,
    processCheckArmstrong
};