const fetchPromise = require("./async-await");
test("The data is peanut butter", async () => {
  const data = await fetchPromise();
  expect(data).toBe("Peanut Butter.");
});
