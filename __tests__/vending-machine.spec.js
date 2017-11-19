const VendingMachine = require("../lib/vending-machine");

describe("VendingMachine", () => {
  beforeAll(() => {
    test = {};
    test.processedData = {
      inventory: {
        1: {
          name: "Coke",
          cost: 1.75,
          inStock: 11
        },
        2: {
          name: "Pepsi",
          cost: 1.5,
          inStock: 12
        },
        3: {
          name: "Mountain Dew",
          cost: 1.25,
          inStock: 13
        },
        4: {
          name: "Root Beer",
          cost: 0.75,
          inStock: 14
        }
      }
    };
    test.subject = new VendingMachine(test.processedData);
  });
  describe("Print inventory.", () => {
    describe("When a given item id exists", () => {
      it("Should tell me name of corresponding item", () => {
        expect(test.subject.printInventory("2")).toBe("Pepsi");
      });
    });
  });
  describe("Refill inventory.", () => {});
  describe("Re-supply inventory.", () => {});
  describe("Dispense inventory based on payment.", () => {});
  describe("Return change.", () => {});
});
