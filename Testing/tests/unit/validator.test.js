const validators = require("../../controllers/validator");
const services = require("../../services/index");
const assert = require("chai").assert;
const sandbox = require("sinon").createSandbox();

describe("tokenInputValidator",()=>{
  let stub, next;
  beforeEach(()=>{
    stub = sandbox.stub(services, "ajvValidator");
    next = sandbox.stub();
  });
  afterEach(()=>{
    stub.restore();
  });
  it("should call next",()=>{
    stub.returns(true);
    validators.tokenInputValidator({body:{input:"hello"}}, "", next);
    assert.equal(next.called,true);
  });
  it("should not call next",()=>{
    stub.returns(false);
    validators.tokenInputValidator({body:{input:"hello"}}, "", next);
    assert.equal(next.called,false);
  });
});

describe("tokenValidationValidator",()=>{
  let stub, next;
  beforeEach(()=>{
    stub = sandbox.stub(services, "ajvValidator");
    next = sandbox.stub();
  });
  afterEach(()=>{
    stub.restore();
  });
  it("should call next",()=>{
    stub.returns(true);
    validators.tokenValidationValidator({query:{input:"hello"}}, "", next);
    assert.equal(next.called,true);
  });
  it("should not call next",()=>{
    stub.returns(false);
    validators.tokenValidationValidator({query:{input:"hello"}}, "", next);
    assert.equal(next.called,false);
  });
});

describe("multiple10inputValidator",()=>{
  let stub, next;
  beforeEach(()=>{
    stub = sandbox.stub(services, "ajvValidator");
    next = sandbox.stub();
  });
  afterEach(()=>{
    stub.restore();
  });
  it("should call next",()=>{
    stub.returns(true);
    validators.multiple10inputValidator({params:{input:"hello"}}, "", next);
    assert.equal(next.called,true);
  });
  it("should not call next",()=>{
    stub.returns(false);
    validators.multiple10inputValidator({params:{input:"hello"}}, "", next);
    assert.equal(next.called,false);
  });
});

describe("occurenceCounterInputValidator",()=>{
  let stub, next;
  beforeEach(()=>{
    stub = sandbox.stub(services, "ajvValidator");
    next = sandbox.stub();
  });
  afterEach(()=>{
    stub.restore();
  });
  it("should call next",()=>{
    stub.returns(true);
    validators.occurenceCounterInputValidator({body:{input:"hello"}}, "", next);
    assert.equal(next.called,true);
  });
  it("should not call next",()=>{
    stub.returns(false);
    validators.occurenceCounterInputValidator({body:{input:"hello"}}, "", next);
    assert.equal(next.called,false);
  });
});

describe("checkArmstringInputValidator",()=>{
  let stub, next;
  beforeEach(()=>{
    stub = sandbox.stub(services, "ajvValidator");
    next = sandbox.stub();
  });
  afterEach(()=>{
    stub.restore();
  });
  it("should call next",()=>{
    stub.returns(true);
    validators.checkArmstringInputValidator({params:{num:"hello"}}, "", next);
    assert.equal(next.called,true);
  });
  it("should not call next",()=>{
    stub.returns(false);
    validators.checkArmstringInputValidator({params:{num:"hello"}}, "", next);
    assert.equal(next.called,false);
  });
});