class VendingMachine {
  constructor(data) {
    this.remainingChange = data.remainingChange.change;
    this.inventory = data.inventory;
    console.log(this.inventory);
    console.log(this.remainingChange);
  }

  printInventory(id) {
    const item = this.inventory[id];
    if (!item) {
      throw new Error("Please input a valid id");
    } else {
      return item.name;
    }
  }
  refillInventory(id, int) {
    const item = this.inventory[id];
    if (!item || isNaN(int)) {
      throw new Error("Please input a valid integer and item id.");
    } else {
      return item.inStock + int;
    }
  }
  resupChange(change) {
    if (isNaN(change)) {
      throw new Error("Please input a valid integer.");
    } else {
      return this.remainingChange + change;
    }
  }
  dispenseInventory(id, payment) {
    const item = this.inventory[id];
    const cost = item.cost;
    if (!item || payment < cost) {
      throw new Error("Please input a valid id & correct change.");
    } else {
      return item.name;
    }
  }
  returnChange(change) {}
}

module.exports = VendingMachine;
