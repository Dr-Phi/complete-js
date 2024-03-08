'use strict';

// // Challenge #1

// const Car = function(make, speed){
//     this.make = make,
//     this.speed = speed
// };

// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(`${this.make} is moving at ${this.speed}`)
// };

// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} is moving at ${this.speed}`)
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate()
// bmw.accelerate()
// bmw.brake()
// bmw.accelerate()
// mercedes.accelerate()
// mercedes.accelerate()
// mercedes.brake()


// Challenge #2

class CarCl{
   
    constructor (make, speed){
        this.make = make,
        this.speed = speed
    }


    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is moving at ${this.speed}`)
    };

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is moving at ${this.speed}`)
    };

    get speedUS(){
        return this.speed / 1.6
    }
    
    set speedUS(speed){
        this.speed = speed * 1.6
    }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 60;
console.log(ford)
