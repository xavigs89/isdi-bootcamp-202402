module.exports = Dog
var Animal = require("./Animal");
Dog.prototype = new Animal()

function Dog(name, species, age, weight, gender) {
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
  
   
    