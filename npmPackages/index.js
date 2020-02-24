const express = require("express");

const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");

const Ajv = require("ajv");

const schema = require("./schema.js");
const { countOccurence,
    armstrongNum } = require("./controllers/index.js");


var ajv = new Ajv();

const app = express();

let privateKey = "shhhhh";
let publicKey;


app.use(bodyParser.json());


app.post("/", (req, res) => {
    publicKey = req.body;
    var valid = ajv.validate(schema.schema1, req.body);
    if (!valid) {
        res.sendStatus(400);
        return;
    }
    // Token generated will get expired in 30 seconds
    jwt.sign(publicKey, privateKey, { expiresIn: 30 }, (err, token) => {
        res.send({
            success: true,
            token
        });
    });
});

app.get("/check", (req, res) => {
    var valid = ajv.validate(schema.schema2, req.query);
    if (!valid) {
        res.sendStatus(400);
        return;
    }
    jwt.verify(req.query.token, "shhhhh", (err, decoded) => {
        if (err) res.send("Token expired! Login Again");
        else if (decoded.input === "hello")
            res.send("Authentication passed");
        else
            res.send("Authentication Failed");
    });

});

app.get("/multiple10/:input", (req, res) => {
    var valid = ajv.validate(schema.schema3, Number(req.params.input));
    if (!valid) {
        res.sendStatus(400);
        return;
    }
    let input = req.params.input, i = 1;
    let output = [];
    while (i <= 10) {
        output.push(input * i);
        i += 1;
    }
    res.send(output);
});

app.post("/occurenceCounter", (req, res) => {
    var valid = ajv.validate(schema.schema4, req.body);
    if (!valid) {
        res.sendStatus(400);
        return;
    }
    let str = req.body.input.trim().toLowerCase();
    res.send(countOccurence(str));
});

app.get("/checkArmStrong/:num", (req, res) => {
    var valid = ajv.validate(schema.schema5, Number(req.params.num));
    if (!valid) {
        console.log(ajv.errors);
        res.sendStatus(400);
        return;
    }
    let num = req.params.num;
    if (armstrongNum(num))
        res.send(`${num} is an armstrong number`);
    else
        res.send(`${num} is not an armstrong number`);
});

app.listen("3001", () => {
    console.log("Server Connected");
});
