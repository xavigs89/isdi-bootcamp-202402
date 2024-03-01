function Animal(name, birthdate, country, weight) {
  if (typeof name !== "string") throw new TypeError("name is not a string");

  if (!(birthdate instanceof Date))
    throw new TypeError("birthdate is not a Date");

  if (typeof country !== "string")
    throw new TypeError("country is not a string");

  if (typeof weight !== "number") throw new TypeError("weight is not a number");

  this.name = name;
  this.birthdate = birthdate;
  this.country = country;
  this.weight = weight;
  this.sleeping = false;
  this.eating = " ";
  this.legsSpeed = Animal.NOT_WALK;
}

Animal.NOT_WALK = 0;
Animal.WALK_NORMAL = 1;
Animal.RUN = 2;

//CREAMOS LAS FUNCIONES QUE SE HAN PLANTEADO EN EL ARCHIVO .TEST
Animal.prototype.sleep = function () {
  this.sleeping = true;
};

Animal.prototype.awake = function () {
  this.sleeping = false;
};

Animal.prototype.eat = function (food) {
  if (this.sleeping) 
  throw new Error("try to eat on sleeping");
  this.eating = food;
};

Animal.prototype.moveLegs = function (speed) {
  this.legsSpeed = speed === undefined ? 4 : speed;
};

Animal.prototype.toString = function () {
  return Animal.name + " (" + this.name + ")";
};

module.exports = Animal;

/*function Animal(name, species, age, weight, gender) {
    this.name = name
    this.species = species
    this.age = age
    this.weight = weight
    this.gender = gender
    this.move
    this.sleeping = false
    this.breathing = true
    this.eating = ''
    //this.legsSpeed = Person.NOT_WALK
    
  }

Animal.NOT_WALK = 0
Animal.WALK_NORMAL = 1
Animal.RUN = 2


  
Animal.prototype.breathe = function () {
    this.breathing = true
}
/*



  Animal.prototype.move = function () {
    this.moving = true
  }

  Animal.prototype.makeNoise = function (someNoise) {
    this.noise = someNoise
  }

  Animal.prototype.eat = function (food) {
    if (this.sleeping) throw new Error('try to eat on sleeping')
    else if (typeof food !== 'string') {
throw new Error('please, put a string')}
  
    this.eating = food
  }
  */