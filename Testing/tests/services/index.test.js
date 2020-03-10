const services = require("../../services");
const assert = require("chai").assert;
const jwt = require("jsonwebtoken");
const sandbox = require("sinon").createSandbox();

describe("countOccurence",()=>{
  it("testing the flow of count occurence should return characters with their occurence",()=>{
    let result = services.countOccurence("lets play");
    assert.deepEqual(result, { l: 2, e: 1, t: 1, s: 1, p: 1, a: 1, y: 1 });
  });
  it("testing the 400 response, should return an empty object when invalid values are provided",()=>{
    let result = services.countOccurence("     ");
    assert.deepEqual(result, {});
  });
});

describe("CheckArmstring",()=>{
  it("should return true when value provide is an armstrong number",() => {
    let result = services.armstrongNum("153");
    assert.equal(result, true);
  });
  it("should return false when value provide is not an armstrong number",() => {
    let result = services.armstrongNum("111");
    assert.equal(result, false);
  });
});

describe("getMultiple10()",()=>{
  it("should return an array of first 10 multiples of the provided value",() => {
    let result = services.getMultiple10(20);
    assert.deepEqual(result, [ 20, 40, 60, 80, 100, 120, 140, 160, 180, 200 ]);
  });
});

describe("verifyToken()",()=>{
  let stub;
  beforeEach(()=>{
    stub = sandbox.stub(jwt, "verify");
  });
  afterEach(()=>{
    sandbox.restore();
  });
  it("should return the success value received from jwt.verify",async() => {
    stub.returns(Promise.resolve({err: null, decoded:{data: true}}));
    let result = await services.verifyToken(20);
    assert.equal(stub.called, true);
    assert.deepEqual(result, {err: null, decoded:{data: true}});
  });
  it("should return the false value received from jwt.verify",async() => {
    stub.returns(Promise.resolve({err: true, decoded:null}));
    let result = await services.verifyToken(20);
    assert.equal(stub.called, true);
    assert.deepEqual(result, {err: true, decoded:null});
  });
});