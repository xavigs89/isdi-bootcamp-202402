var assert = require("./assert");

var Animal = require("./Animal");

console.log("TEST Animal");

console.log("CASE constructor");

var animal = new Animal("Quilombito", "dog", 10, 30, "male");

assert.equalsValue(animal.name, "Quilombito");
assert.equalsValue(animal.breed, "dog");
assert.equalsValue(animal.age, 10);
assert.equalsValue(animal.weight, 30);
assert.equalsValue(animal.gender, "male");


console.log('CASE sleep');
var animal = new Animal("Quilombito", "dog", 10, 30, "male");
animal.sleep()
assert.equalsValue(animal.sleeping, true)


console.log('CASE awake');
var animal = new Animal("Quilombito", "dog", 10, 30, "male");
animal.awake()
assert.equalsValue(animal.sleeping, false)


console.log('CASE move');
var animal = new Animal("Quilombito", "dog", 10, 30, "male");
animal.move()
assert.equalsValue(animal.moving, true)


console.log('CASE noise');
var animal = new Animal("Quilombito", "dog", 10, 30, "male");
animal.makeNoise('random noise')
assert.equalsValue(animal.noise, 'random noise')


console.log('CASE eat');
var animal = new Animal("Quilombito", "dog", 10, 30, "male");
animal.eat('asadito')
assert.equalsValue(animal.eating, 'asadito')






console.log('CASE not walking')

var animal = new Animal("Quilombito", "dog", 10, 30, "male");

animal.moveLegs(Animal.NOT_WALK)

assert.equalsValue(animal.legsSpeed, Animal.NOT_WALK)



console.log('CASE walk normal')

var animal = new Animal("Quilombito", "dog", 10, 30, "male");

animal.moveLegs(Animal.WALK_NORMAL)

assert.equalsValue(animal.legsSpeed, Animal.WALK_NORMAL)



console.log('CASE run')

var animal = new Animal("Quilombito", "dog", 10, 30, "male");

animal.moveLegs(Animal.RUN)

assert.equalsValue(animal.legsSpeed, Animal.RUN)

