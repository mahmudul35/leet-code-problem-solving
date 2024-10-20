const creteHelloWorld = () => {
  return (function () {
    return "Hello World";
  })(); // Immediately Invoked Function Expression (IIFE)
};
const result = creteHelloWorld();
console.log(result);
