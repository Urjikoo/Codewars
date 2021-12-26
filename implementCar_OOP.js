// use a constructor function to implement a car. a car has a make and a speed property. The speed property is the current speed of the car in km/h;
//  1mplement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
// Implement a 'brake' method that will decrease the car's speed by 5 and log  the new speed to the console'
// create 2 car objects and experiments with calling 'accelerate' and 'brake' multiple times on each of them.
// Data car 1=> 'BMW' going at 120 km/h
// Data car2=>'Mercedes' going at 95 km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelarate = function () {
  this.speed = +10;
  console.log(`Thee ${this.make} is flowing at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed = -5;
  console.log(`Thee ${this.make} is flowing at ${this.speed}`);
};
const bmw = new Car("BMW", 1995);
const mercedes = new Car("Mercedes", 2000);
bmw.accelarate();
bmw.brake();
mercedes.accelarate();
mercedes.brake();
