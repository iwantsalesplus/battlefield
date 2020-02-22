import { expect } from "chai";
import Repo from "../repository";
import { createPlayer } from "../repository";
import { getPlayer } from "../repository";
import { findAllPlayers } from "../repository";
import { createGame } from "../repository";
import { getGame } from "../repository";
import { updateGameState } from "../repository";
import { updateGamePlayersData } from "../repository";

describe("Repository Tests: DB Methods", () => {
  var database;
  beforeEach(done => setTimeout(done, 1000));
  before(done => {
    Repo(db => {
      database = db;
      done();
    });
  });

  describe("---> Should create player", () => {
    it("createPlayer()", async () => {
      const result = await createPlayer(database, "TEST_PLAYER");
      expect(result.id).to.equal(1);
    });
  });
  describe("---> Should get  player", () => {
    it("getPlayer()", async () => {
      const result = await getPlayer(database, 1);
      expect(result.id).to.equal(1);
    });
  });
  describe("---> Should find all players", () => {
    it("findAllPlayers()", async () => {
      const result = await findAllPlayers(database);
      expect(result[0].id).to.equal(1);
    });
  });
  describe("---> Should create game", () => {
    it("crateGame()", async () => {
      const result = await createGame(
        database,
        "socket_1",
        1,
        "{}",
        2,
        "{}",
        "ONGOING"
      );
      expect(result.id).to.equal(1);
    });
  });
  describe("---> Should get game", () => {
    it("getGame()", async () => {
      const result = await getGame(database, "socket_1");
      expect(result[0].id).to.equal(1);
    });
  });
  describe("---> Should update game state", () => {
    it("updateGameState()", async () => {
      const result = await updateGameState(database, "socket_1", "GAMEOVER");

      expect(result[0]).to.equal(1);
    });
  });
  describe("---> Should update game players data", () => {
    it("updateGamePlayersData()", async () => {
      const result = await updateGamePlayersData(
        database,
        "socket_1",
        "{}",
        "{}"
      );

      expect(result[0]).to.equal(1);
    });
  });
});
