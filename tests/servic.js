import { expect } from "chai";
import Repo from "../repository";
import { createNewGame } from "../service";
import { createPlayer } from "../repository";
import { getPlayer } from "../repository";
import { listPlayers } from "../service";
import { getGame } from "../repository";
import { updateGameState } from "../repository";
import { updateGamePlayersData } from "../repository";

describe("Services Tests: Service Layer", () => {
  var database;
  beforeEach(done => setTimeout(done, 1000));
  before(done => {
    Repo(db => {
      database = db;
      done();
    });
  });

  describe("---> Should create new game", () => {
    it("createNewGame()", async () => {
      const result = await createNewGame(database,"socket_1", 1,2);
    });
  });
});
