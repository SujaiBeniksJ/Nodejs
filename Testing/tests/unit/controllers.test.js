const controllers = require("../../controllers/index");
const sinon = require("sinon");
const assert = require("chai").assert;
const services = require("../../services/index");
const sandbox = require("sinon").createSandbox();

describe("processTokenInput",()=>{
  let res={};
  beforeEach(()=>{
    // res = sinon.spy();
    res.send = sandbox.stub();
  });
  it("testing the process TokenInput controller",async()=>{
    // jwt.sign = sinon.stub();
    await controllers.processTokenInput({body:{input: "hello"}}, res);
    // assert.equal(jwt.sign.called, true)
    assert.equal(res.send.called, true);
  });
});

describe("processTokenValidation",() => {
  let res, stub;
  beforeEach(()=>{
    res = {
      send: sandbox.stub()
    };
    stub = sandbox.stub(services, "verifyToken");
  });
  afterEach(()=>{
    stub.restore();
  });
  it("testing the process tokenValidation controller - token expired", async()=>{
    stub.resolves({err: true, decoded: false});
    await controllers.processTokenValidation({query:{token:"token"}}, res);
    assert.equal(res.send.called, true);
    assert.deepEqual(res.send.args, [ [ { success: false, data: "Token expired! Login Again" } ] ]);
  });
  it("testing the process tokenValidation controller - authentication passed", async()=>{
    stub.resolves({err: false, decoded: {input: "hello"}});
    await controllers.processTokenValidation({query:{token:"token"}}, res);
    assert.equal(res.send.called, true);
    assert.deepEqual(res.send.args, [ [ { success: true, data: "Authentication passed" } ] ]);
  });
  it("testing the process tokenValidation controller - authentication failed", async()=>{
    stub.resolves({err: false, decoded: {input: "hi"}});
    await controllers.processTokenValidation({query:{token:"token"}}, res);
    assert.equal(res.send.called, true);
    assert.deepEqual(res.send.args, [ [ { success: false, data: "Authentication failed" } ] ]);
  });
});

describe("processMultiple10",()=>{
  let res, stub;
  beforeEach(()=>{
    res = {
      send: sandbox.stub()  
    };
    stub = sinon.stub(services, "getMultiple10");
  });
  afterEach(()=>{
    stub.restore();
  });
  it("testing the process of processMultiple10",()=>{
    stub.returns([1,2,3]);
    controllers.processMultiple10({params:{input:2}}, res);
    assert.equal(res.send.called, true);
    assert.deepEqual(res.send.args[0][0], [1,2,3]);
  });
});

describe("processOccurenceCounter",()=>{
  let res, stub;
  beforeEach(()=>{
    res = {
      send: sandbox.stub()  
    };
    stub = sinon.stub(services, "countOccurence");
  });
  afterEach(()=>{
    stub.restore();
  });
  it("testing the process of processOccurenceCounter",()=>{
    stub.returns({"h": 1, "i": 1});
    controllers.processOccurenceCounter({body:{input:"hi"}}, res);
    assert.equal(res.send.called, true);
    assert.deepEqual(res.send.args[0][0], {"h": 1, "i": 1});
  });
});

describe("processCheckArmstrong",()=>{
  let res, stub;
  beforeEach(()=>{
    res = {
      send: sandbox.stub()  
    };
    stub = sinon.stub(services, "armstrongNum");
  });
  afterEach(()=>{
    stub.restore();
  });
  it("testing the success of processCheckArmstrong",()=>{
    stub.returns(true);
    controllers.processCheckArmstrong({params:{num:"153"}}, res);
    assert.equal(res.send.called, true);
    assert.deepEqual(res.send.args[0][0], {data: "153 is an armstrong number"});
  });
  it("testing the success of processCheckArmstrong",()=>{
    stub.returns(false);
    controllers.processCheckArmstrong({params:{num:"5"}}, res);
    assert.equal(res.send.called, true);
    assert.deepEqual(res.send.args[0][0], {data: "5 is not an armstrong number"});
  });
});