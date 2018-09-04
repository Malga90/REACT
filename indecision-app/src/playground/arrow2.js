// arguments object - no longer bound with arrow functions

const add =  (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 55, 89));

//this keyword - no longer bound with arrow functions

const user = {
  name: 'Małga',
  cities: ['London', 'Gdańsk'],
  printPlacesLived() {
    return this.cities.map((city) =>  this.name + ' has lived in ' + city);

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());

// Challenge!

const multiplier = {
  numbers: [2, 6, 89, 216, 76],
  mulitplyBy: 6,
  multiply() {
    return this.numbers.map(number => this.mulitplyBy * number);
  }
};

console.log(multiplier.multiply());
