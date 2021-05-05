const { omitBy } = require("./index");
describe("omitBy", () => {
  it("test", () => {
    const result = omitBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number");
    expect(result).toEqual({ b: "2" });
  });
});
