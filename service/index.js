import { findAllPlayers } from "../repository";
import { findAllGames } from "../repository";
import { createGame } from "../repository";
import { RUNNING } from "./settings";
import { ROWS, COLS } from "./settings";

export const arrayToObject = array => {
  let keys = arr[0];
  let newArr = arr.slice(1, arr.length);
  let formatted = [],
    data = newArr,
    cols = keys,
    l = cols.length;
  for (let i = 0; i < data.length; i++) {
    let d = data[i],
      o = {};
    for (let j = 0; j < l; j++) o[cols[j]] = d[j];
    formatted.push(o);
  }
  return formatted;
};

export const listPlayers = async db => {
  try {
    const result = await findAllPlayers(db);
    return result;
  } catch (error) {
    return [];
  }
};

export const listGames = async db => {
  try {
    const result = await findAllGames(db);
    return result;
  } catch (error) {
    return [];
  }
};

export const createNewGame = async (db, socketid, p1, p2) => {
  try {
    const matrix1 = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(0));
    const matrix1_json =  JSON.stringify( arrayToObject(matrix1));
    const matrix2 = new Array(ROWS).fill(0).map(() => new Array(COLS).fill(0));
    const matrix2_json =  JSON.stringify( arrayToObject(matrix2));
    const result = await createGame(db, sockerid, p1, matrix1_json, p2, matrix2_json, RUNNING);
    console.log(result);
    return result;

  } catch (error) {

    return [];
  }
};

export const getGameState = async (db, socketid, player) => {};

export const placeShip = async (db, sockerid, player, ship, position) => {};

export const attack = async (db, shocketid, player, ship, position) => {};
