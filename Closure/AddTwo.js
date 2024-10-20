function outerFunction(a) {
  return function (b) {
    const sum = a + b;
    return sum;
  };
}
const addTwo = outerFunction(2);
console.log(addTwo(3));
