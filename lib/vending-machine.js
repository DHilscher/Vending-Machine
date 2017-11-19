class VendingMachine {
  constructor(data) {
    this.inventory = data.inventory;
    console.log(this.inventory);
  }

  printInventory(id) {
    const item = this.inventory[id];
    if (!item) {
      throw new Error("Please input a valid id");
    } else {
      return item.name;
    }
  }
  refillInventory(inventory) {}
  resupChange(change) {}
  dispenseInventory(inventory) {}
  returnChange(change) {}
}

module.exports = VendingMachine;
