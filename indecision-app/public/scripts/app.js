'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 55, 89));

//this keyword - no longer bound with arrow functions

var user = {
  name: 'Małga',
  cities: ['London', 'Gdańsk'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());

// Challenge!

var multiplier = {
  numbers: [2, 6, 89, 216, 76],
  mulitplyBy: 6,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return _this2.mulitplyBy * number;
    });
  }
};

console.log(multiplier.multiply());
