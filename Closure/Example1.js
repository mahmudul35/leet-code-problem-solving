function outerFunction() {
  let num = 1;
  function innerFunction() {
    console.log(num);
  }
  num++;
  innerFunction();
}
// const result = outerFunction();
console.log(outerFunction());
