const assert = require("chai").assert;
let chai = require("chai");
let chaiHttp = require("chai-http");
let {server, app} = require("../../index");
const sinon = require("sinon");
// const sandbox = require("sinon").createSandbox();

// const services = require("../../services/index.js");

chai.use(chaiHttp);

describe("testing the multiple10 route",()=>{
  it("checking the success condition", (done) => {
    chai.request(app)
      .get("/multiple10/10")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.typeOf(res.body, "array");
        assert.deepEqual(res.body,[
          10,20,30,40,50,60,70,80,90,100
        ]);
        done();
      });
  });

  it("checking the 400 maxLength condition", (done) => {
    chai.request(app)
      .get("/multiple10/100000")
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });

  it("checking the 400 minLength condition", (done) => {
    chai.request(app)
      .get("/multiple10/-100000")
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
});

describe("testing the occurence counter route", () => {
  afterEach(()=>{
    server.stop();
  });
  it("checking the success condition should send characters occurence as response", (done) => {
    let input = {
      input: "let's play"
    };
    chai.request(app)
      .post("/occurenceCounter")
      .send(input)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.typeOf(res.body, "object");
        assert.deepEqual(res.body, { l: 2, e: 1, t: 1, "'": 1, s: 1, p: 1, a: 1, y: 1 });
        done();
      });
  });
  it("should return status 400 when invalid value is sent", (done) => {
    let input={};
    chai.request(app)
      .post("/occurenceCounter")
      .send(input)
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("should return status 400 when null is sent", (done) => {
    let input={
      input: ""
    };
    chai.request(app)
      .post("/occurenceCounter")
      .send(input)
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("should return status 400 when integer is sent", (done) => {
    let input={
      input: 123
    };
    chai.request(app)
      .post("/occurenceCounter")
      .send(input)
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
});

describe("testing armstring num route",()=>{
  it("checking the success condition should return armstrong number",()=>{
    chai.request(app)
      .get("/checkArmStrong/153")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.typeOf(res.body, "object");
        assert.equal(res.body.data, "153 is an armstrong number");
      });
  });
  it("checking the success condition should return not an armstrong number",()=>{
    chai.request(app)
      .get("/checkArmStrong/111")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.typeOf(res.body, "object");
        assert.equal(res.body.data, "111 is not an armstrong number");
      });
  });
  it("should return 400 when negative value is suplied",()=>{
    chai.request(app)
      .get("/checkArmStrong/-20")
      .end((err, res) => {
        assert.equal(res.status, 400);
      });
  });
  it("should return 400 when more than maximum value is provided",()=>{
    chai.request(app)
      .get("/checkArmStrong/100000")
      .end((err, res) => {
        assert.equal(res.status, 400);
      });
  });
});

describe("token creation api",()=>{
  it("checking the success response",()=>{
    chai.request(app)
      .post("/")
      .send({input: "hello"})
      .end((err, res)=>{
        assert.equal(res.status, 200);
        assert.equal(res.body.success, true);
        assert.typeOf(res.body, "object");
      });
  });
  it("shuld return 400 when string length greater than maxLimit is provided",()=>{
    chai.request(app)
      .post("/")
      .send({input: "hello000000000000000"})
      .end((err, res)=>{
        assert.equal(res.status, 400);
      });
  });
});

describe("testing token validation api",()=>{
  it("checking the flow of invalid token",(done)=>{
    chai.request(app)
      .get("/check/?token=sometoken")
      .end((err, res)=>{
        assert.equal(res.status, 400);
        done();
      });
  });
  it("checking the flow of expired token response",(done)=>{
    let clock = sinon.useFakeTimers(new Date("Fri Mar 13 2020 10:00"));
    chai.request(app)
      .get("/check/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnB1dCI6ImhlbGxvIiwiaWF0IjoxNTgzOTg2MzU2LCJleHAiOjE1ODQwNzI3NTZ9.Z9mg6vKnpK-Ph1WxvcfT4wng-0N4g7T9B68qlfLhiFQ")
      .end((err, res)=>{
        assert.equal(res.status, 200);
        assert.equal(res.body.success, false);
        assert.equal(res.body.data, "Token expired! Login Again");
        clock.restore();
        done();
      });
  });
  it("checking the flow of true authentication",(done)=>{
    let clock = sinon.useFakeTimers(new Date("Fri Mar 12 2020 10:00"));
    chai.request(app)
      .get("/check/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnB1dCI6ImhlbGxvIiwiaWF0IjoxNTgzOTg2MzU2LCJleHAiOjE1ODQwNzI3NTZ9.Z9mg6vKnpK-Ph1WxvcfT4wng-0N4g7T9B68qlfLhiFQ")
      .end((err, res)=>{
        assert.equal(res.status, 200);
        assert.equal(res.body.success, true);
        assert.equal(res.body.data, "Authentication passed");
        clock.restore();
        done();
      });
  });
  it("checking the flow of false authentication",(done)=>{
    chai.request(app)
      .get("/check/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnB1dCI6ImhlbGxvMCIsImlhdCI6MTU4Mzk4NjQ2MSwiZXhwIjoxNTg0MDcyODYxfQ.bZ_roVHEcKQjiZmDzCEvBr5QXKGyM4RTn-xfBtzxays")
      .end((err, res)=>{
        assert.equal(res.status, 200);
        assert.equal(res.body.success, false);
        assert.equal(res.body.data, "Authentication failed");
        done();
      });
  });
});