const fetchPromise = require("./promise");
test("The data is peanut better.", () => {
  return expect(fetchPromise()).resolves.toBe("Peanut Better.");
});

// test("The fetch fails with an error.", () => {
//   return expect(fetchPromise()).rejects.toThrow("Error");
// });
