import Sequelize from "sequelize";

class Player {
  constructor(sequelize) {
  }

  async setup(sequelize){
    await sequelize.define("player", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  }
}
export default Player;
