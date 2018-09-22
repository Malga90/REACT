class Person {
  constructor(name = 'John Doe', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let message = super.getGreeting();

    if(this.hasHomeLocation()) {
      message += ` I am visiting from ${this.homeLocation}.`
    }

    return message;
  }
}

const me = new Traveler('Malga', 28, 'Gdańsk');
console.log(me.getGreeting());

const meToo = new Traveler();
console.log(meToo.getGreeting());
