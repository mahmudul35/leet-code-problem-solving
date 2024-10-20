const counter = (n) => {
  return function () {
    return n++;
  };
};
const count = counter(10);
console.log(count);
// console.log(count());
// console.log(count());
