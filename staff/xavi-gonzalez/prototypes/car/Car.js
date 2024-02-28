function Car(brand, model, year, color, doors, fuelType, transmission, gears) {
  this.brand = brand;
  this.model = model;
  this.status = "off";
  this.deposit = 0;
  this.year = year;
  this.color = color;
  this.doors = doors;
  this.fuelType = fuelType;
  this.transmission = transmission;
  this.gears = gears;
  this.gear = 0;
  this.speed = 0;
  this.acceleration = 0;
  this.direction = '';
  this.steering = 0;
}

Car.prototype.fuel = function (load) {
  this.deposit = load;
  if (typeof load !== "number") {
    throw new TypeError(load + " is not a number");
  } else if (load < 0 || load > 100)
    throw new RangeError(load + " is not working");
};

Car.prototype.start = function () {
  this.status = "on";
};

Car.prototype.stop = function () {
  this.status = "off";
};

Car.prototype.changeGear = function (gear) {
  
  this.gear = gear;
  if (typeof gear !== "number") {
    throw new TypeError(gear + " is not a number");
  } else if (gear < 0 || gear > this.gears) {
    throw new RangeError(gear + " is not going to work");
 } else if (gear > 0 && gear < this.gears+1) {
    this.direction = 'forward'
 } else if (gear === -1){
    this.direction = 'backward'
 }
}


Car.prototype.speedUp = function (acceleration) {
  if (typeof acceleration !== "number") {
    throw new TypeError(acceleration + " is not a number");
  } else if (acceleration < 0 || acceleration > 100) {
    throw new TypeError(acceleration + " is not going to work");
  } 
  this.acceleration = acceleration;
};

Car.prototype.turnSteering = function (steering) {
    this.steering = steering

  if (this.steering > 0 && this.gear > 0) 
    this.direction = 'forward-right'

  if (this.steering < 0 && this.gear > 0)
      this.direction = 'forward-left'

  if (this.steering > 0 && this.gear === -1)
      this.direction = 'backward-right'

  if (this.steering < 0 && this.gear === -1)
      this.direction = 'backward-left'
}

module.exports = Car;
