import Sequelize from "sequelize";

class Game {
  constructor() {
  }
  setup(sequelize) {
    sequelize.define("game", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      socket: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      player_1: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      player_2: {
        type: Sequelize.INTEGER,
        type: Sequelize.TEXT,
        allowNull: false
      },
      player_1_data: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      player_2_data: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      state: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  }
}
export default Game;
