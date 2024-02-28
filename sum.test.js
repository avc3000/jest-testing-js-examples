// Test One Step
const sum = require("./sum");
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Test Two Step
test("Object Assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// Test Three Step
test("Null is Falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

// Test Four Step
test("One is Truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});
