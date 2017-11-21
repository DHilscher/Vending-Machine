class VendingMachine {
  constructor(data) {
    this.remainingChange = data.remainingChange.change;
    this.inventory = data.inventory;
  }

  printInventory(id) {
    const item = this.inventory[id];
    if (!item) {
      throw new Error("Please input a valid id");
    } else {
      return this.inventory[id].name;
    }
  }
  refillInventory(id, int) {
    const item = this.inventory[id];
    if (!item || isNaN(int)) {
      throw new Error("Please input a valid integer and item id.");
    } else {
      return this.inventory[id].inStock + int;
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
  returnChange(id, payment) {
    const item = this.inventory[id];
    const cost = item.cost;
    let change;
    const t = 10;
    if (!item || payment < cost) {
      throw new Error("Please input a valid id & correct change.");
    } else {
      change = (payment * t - cost * t) / t;
      while (change >= 2) {
        change = (change * t - 2 * t) / t;
        console.log("You received a toonie", change, "remaining");
      }
      while (change >= 1) {
        change = (change * t - 1 * t) / t;
        console.log("You received a loonie", change, "remaining");
      }
      while (change >= 0.25) {
        change = (change * t - 0.25 * t) / t;
        console.log("You received a quarter", change, "remaining");
      }
      while (change >= 0.1) {
        change = (change * t - 0.1 * t) / t;
        console.log("You received a dime", change, "remaining");
      }
      while (change >= 0.05) {
        change = (change * t - 0.05 * t) / t;
        console.log("You received a Nickel", change, "remaining");
      }
      return this.remainingChange - (payment - cost);
    }
  }
}

module.exports = VendingMachine;
