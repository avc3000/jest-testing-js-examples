function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Peanut Butter.");
    }, 1000);
  });
}

module.exports = fetchPromise;
