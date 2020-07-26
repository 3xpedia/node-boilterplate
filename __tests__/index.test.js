const great = require("../src/index");

describe("index", () => {
  test("call console.log", () => {
    global.console.log = jest.fn();
    great();
    expect(global.console.log).toHaveBeenCalled();
  });
});
