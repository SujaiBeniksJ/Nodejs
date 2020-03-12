const {server, app} = require("../../index");
const assert = require("chai").assert;
const chai = require("chai");
const chaiHttp = require("chai-http");


chai.use(chaiHttp);


describe("testing the server",()=>{
  after(()=>{
    server.stop();
  });
  it("should return 404 status when invalid api is called",(done)=>{
    chai.request(app)
      .get("/aaaaaaaaaaaaaaaaaa")
      .end((err, res) => {
        assert.equal(res.status, 404);
        done();
      });
  });
  it("should return 400 status when invalid input is passed",(done)=>{
    chai.request(app)
      .get("/sendClientError")
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
});