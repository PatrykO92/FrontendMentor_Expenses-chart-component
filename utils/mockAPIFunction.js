import data from "../data/data.js";
const SETERROR = false; // Set to true to simulate an error
const FETCHDELAY = 0.01; // Set delay of fetch in seconds

function mockAPIFunction() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
      const resolveData = data;
      const isError = SETERROR;

      if (isError) {
        reject(new Error("Mock API error"));
      } else {
        resolve(resolveData);
      }
    }, FETCHDELAY * 1000);
  });
}

export default mockAPIFunction;
