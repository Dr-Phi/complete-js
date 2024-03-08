'use strict';

// // Challenge #1

const Car = function(make, speed){
    this.make = make,
    this.speed = speed
};

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
};

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
};

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
        console.log(`${this.make} is going at ${this.speed} km/h`)
    };

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
        return this
    };

    get speedUS(){
        return this.speed / 1.6
    }
    
    set speedUS(speed){
        this.speed = speed * 1.6
    }
}

// const ford = new CarCl("Ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 60;
// console.log(ford)


// // Challenge #3
console.log("Challenge #3")

const EV = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo
}

EV.prototype.accelerate = function(){
    this.speed += 20;
    --this.charge
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`)
}

const tesla = new EV("Tesla", 120, 23);

// tesla.accelerate()
// tesla.accelerate()
// tesla.brake()
// tesla.chargeBattery(90)
// console.log(tesla)



// // Challenge #4
console.log("Challenge #4")

class EVCl extends CarCl{
    #charge;

    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }

    accelerate(){
    this.speed += 20;
    --this.#charge
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`)
    return this;
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    }
}

const rivian = new EVCl("Rivian", 120, 23);

rivian.accelerate().brake().chargeBattery(46).accelerate()
console.log(rivian.speedUS)
console.log(rivian)