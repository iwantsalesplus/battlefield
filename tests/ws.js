import chai from "chai";
import app from "../server.js";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
chai.should();

describe("Web Servieces Tests: ws route", () => {
  beforeEach(done => setTimeout(done, 1000));
  describe("---> WS should return info in json", () => {
    it("/ws/info ", done => {
      chai
        .request(app)
        .get("/ws/info")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("---> WS should return playes in json", () => {
    it("/ws/players", done => {
      chai
        .request(app)
        .get("/ws/players")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("---> WS should return games in json", () => {
    it("/ws/games", done => {
      chai
        .request(app)
        .get("/ws/games")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
