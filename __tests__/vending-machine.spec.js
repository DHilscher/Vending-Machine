const VendingMachine = require("../lib/vending-machine");

describe("VendingMachine", () => {
  beforeAll(() => {
    test = {};
    test.processedData = {
      remainingChange: {
        change: 10.5
      },
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
    describe("When a given item id exists.", () => {
      it("Should tell me name of corresponding item.", () => {
        expect(test.subject.printInventory("2")).toBe("Pepsi");
      });
    });
    describe("When a given item id does not exist.", () => {
      it("Should throw a error.", () => {
        expect(() => test.subject.printInventory("10")).toThrow();
      });
    });
  });
  describe("Refill inventory.", () => {
    describe("When given a valid integer and id.", () => {
      it("Should add integer to inStock id amount.", () => {
        expect(test.subject.refillInventory("2", 5)).toBe(17);
      });
    });
    describe("When given a invalid integer.", () => {
      it("Should throw a error.", () => {
        expect(() => test.subject.refillInventory("2", "a")).toThrow();
      });
    });
    describe("When given a invalid id.", () => {
      it("Should throw a error.", () => {
        expect(() => test.subject.refillInventory("a", 5)).toThrow();
      });
    });
  });
  describe("Re-supply change.", () => {
    describe("When given a valid integer.", () => {
      it("Should add integer to remainingChange.", () => {
        expect(test.subject.resupChange(5)).toBe(15.5);
      });
    });
    describe("When given a invalid integer.", () => {
      it("Should throw a error.", () => {
        expect(() => test.subject.resupChange("a")).toThrow();
      });
    });
  });
  describe("Dispense inventory based on payment.", () => {
    describe("When given valid payment.", () => {
      it("Should return correct item.", () => {
        expect(test.subject.dispenseInventory("3", 1.75)).toBe("Mountain Dew");
      });
    });
    describe("When given invalid payment.", () => {
      it("Should return error.", () => {
        expect(() => test.subject.dispenseInventory("3", 0.75)).toThrow();
      });
    });
  });
  describe("Return change.", () => {
    describe("When payment is more then item cost.", () => {
      it("Should return the correct amount of change.", () => {
        expect(test.subject.returnChange("3", 4.9)).toBe(0);
      });
    });
    describe("When payment is less then item cost.", () => {
      it("Should return error.", () => {
        expect(() => test.subject.returnChange("3", 0.75)).toThrow();
      });
    });
  });
});
