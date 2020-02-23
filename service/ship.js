class Ship {
  constructor(type, position) {
    this.type = type;
    this.position = position;
    this.damaged = 0;
    this.maxDamaged = type.size;
  }
  damage = () => {
    this.damaged++;

  };
  sunk = () => {
    this.sunk = this.maxDamaged;
  };
  isSunk = () => {
    return this.damaged >= this.maxDamaged;
  };
}
export default Player;
