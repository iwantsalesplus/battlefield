import Sequelize from "sequelize";
import { config } from "./config";
import PlayerTable from "./models/player";
import GameTable from "./models/game";

export const createPlayer = async (dbConnection, name) => {
  return await dbConnection.models.player.create({
    name: name
  });
};

export const getPlayer = async (dbConnection, id) => {
  return await db.player.find({
    where: {
      id: id
    }
  });
};

export const findAllPlayers = async dbConnection => {
  return await dbConnection.models.player.findAll({});
};

export const createGame = async (dbConnection, socket, p1, p1_data, p2, p2_data) => {
  return await dbConnection.models.game.create({});
};

export const getGame= async (dbConnection, socket) => {
  return await db.game.find({
    where: {
      socket: socket
    }
  });
};

export const findAllGames= async dbConnection => {
  return await dbConnection.models.game.findAll({});
};

export default async callback => {
  try {
    const dbConnection = new Sequelize(
      config.database,
      config.username,
      config.password,
      {
        host: config.host,
        dialect: config.dialect,
        storage: config.storage
      }
    );
    dbConnection.authenticate().then(async () => {
      console.log("Connection has been established successfully.");
      let playerTable = new PlayerTable();
      let gameTable = new GameTable();
      await playerTable.setup(dbConnection);
      await gameTable.setup(dbConnection);
      await dbConnection.sync();
      callback(dbConnection);
      console.log("Back to server Finish DB Binding");
    });
  } catch (err) {
    console.log(err);
  }
};
