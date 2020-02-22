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
  return await dbConnection.models.player.findByPk(id,{raw: true});
};

export const findAllPlayers = async dbConnection => {
  return await dbConnection.models.player.findAll({}, {raw: true});
};

export const createGame = async (
  dbConnection,
  socket,
  p1,
  p1_data,
  p2,
  p2_data,
  state
) => {
  return await dbConnection.models.game.create({
    socket: socket,
    player_1: p1,
    player_1_data: p1_data,
    player_2: p2,
    player_2_data: p2_data,
    state: state
  });
};

export const getGame = async (dbConnection, socket) => {
  return await dbConnection.models.game.findAll({where: {socket: socket}},{raw: true});
};

export const updateGameState = async (dbConnection, socket, state) => {
  return await dbConnection.models.game.update(
    {
      state: state
    },
    {
      where: {
        socket: socket
      }
    }
  );
};

export const updateGamePlayersData = async (dbConnection,socket, data1, data2) => {
  return await dbConnection.models.game.update(
    {
      player_1_data: data1,
      player_2_data: data2
    },
    {
      where: {
        socket: socket
      }
    }
  );
};

export const findAllGames = async dbConnection => {
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
      let playerTable = new PlayerTable();
      let gameTable = new GameTable();
      await playerTable.setup(dbConnection);
      await gameTable.setup(dbConnection);
      await dbConnection.sync({force:true});
      callback(dbConnection);
    });
  } catch (err) {
    console.log(err);
  }
};
