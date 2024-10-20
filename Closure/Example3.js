function getCapital(capital) {
  return function (interest) {
    return (capital + interest) / 100;
  };
}
const business = getCapital(100000);
console.log(business(25));
