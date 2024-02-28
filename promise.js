function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Peanut Better."), 1000);
  });
}

module.exports = fetchPromise;
