const promiseRes = new Promise(function(resolve, reject) {
  resolve("promise resolve");
});
console.log('promiseRes', promiseRes);

const promiseRej = new Promise(function(resolve, reject) {
  reject(new Error("promise reject"));
});
console.log('promiseRej', promiseRej);

const promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // буде ігноровано
  setTimeout(() => resolve("…")); // буде ігноровано
});
console.log('promise', promise);
