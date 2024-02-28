function Animal(name, species, age, weight, gender) {
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


  Animal.prototype.sleep = function () {
    this.sleeping = true
  }
  
  Animal.prototype.awake = function () {
    this.sleeping = false
  }
  
Animal.prototype.breathe = function () {
    this.breathing = true
}
/*
Animal.prototype.death = function () {
    this.breathing = false
}
*/

  Animal.prototype.moveLegs = function (speed) {
    this.legsSpeed = speed === undefined ? 4 : speed
  }
  
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




  module.exports = Animal
  