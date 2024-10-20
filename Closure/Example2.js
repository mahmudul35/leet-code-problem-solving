function outer(capital) {
  function inner() {
    return capital;
  }
  return inner;
}
var innerFn = outer("Hello");
console.log(innerFn()); // Hello
// In this example, the outer function takes a parameter called capital and returns the inner function. The inner function returns the value of the capital variable. When we invoke the inner function, it prints the value of the capital variable, which is Hello.
