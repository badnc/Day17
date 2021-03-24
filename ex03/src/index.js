const MY_CAR = {
  wheels: 4,
  cylinders: 4,
  size: 2.2,
};

function main(myCar) {
  const { cylinders: carCylinders } = MY_CAR;
  const { size: carSize } = MY_CAR;
  return { carCylinders, carSize };
}
console.log(main(MY_CAR));
module.exports = main;
