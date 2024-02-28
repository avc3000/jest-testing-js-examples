// Test One Step
const myFunction = require("./myFunction");
test("Throws on Invalid Input", () => {
  expect(() => {
    myFunction("Antony");
  }).toThrow();
});
