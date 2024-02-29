var assert = require("./assert");

var Animal = require("./Animal");

console.log("TEST Animal");


console.log("CASE constructor");

var animal = new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", 10);


assert.instanceOf(animal, Animal);
assert.equalsValue(animal.constructor, Animal);
assert.equalsValue(animal.name, "Quilombito");
assert.instanceOf(animal.birthdate, Date);
assert.equalsValue(animal.birthdate.getFullYear(), 2010);
assert.equalsValue(animal.birthdate.getMonth(), 2);
assert.equalsValue(animal.birthdate.getDate(), 25);
assert.equalsValue(animal.birthdate.getHours(), 18);
assert.equalsValue(animal.birthdate.getMinutes(), 30);
assert.equalsValue(animal.country, "GB");
assert.equalsValue(animal.weight, 10);
assert.equalsValue(animal.sleeping, false);
assert.equalsValue(animal.eating, " ");
assert.equalsValue(animal.legsSpeed, 0);


console.log("CASE sleep");
var animal = new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", 10);
animal.sleep();
assert.equalsValue(animal.sleeping, true);


console.log("CASE awake");
var animal = new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", 10);
animal.sleeping = true;
animal.awake();
assert.equalsValue(animal.sleeping, false);


console.log("CASE eat");
var animal = new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", 10);
animal.eat("Asadito");
assert.equalsValue(animal.eating, "Asadito");


console.log("CASE eat on sleeping (unhappy)");
var animal = new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", 10);
animal.sleeping = true;

var errorThrown;

try {
  animal.eat("Asadito");
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "Error", "try to eat on sleeping");


console.log("CASE not walk");
var animal = new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", 10);
animal.moveLegs(Animal.NOT_WALK);
assert.equalsValue(animal.legsSpeed, Animal.NOT_WALK);


console.log("CASE walk normal");
var animal = new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", 10);
animal.moveLegs(Animal.WALK_NORMAL);
assert.equalsValue(animal.legsSpeed, Animal.WALK_NORMAL);



console.log("CASE run");
var animal = new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", 10);
animal.moveLegs(Animal.RUN);
assert.equalsValue(animal.legsSpeed, Animal.RUN);



console.log("CASE toString");
var animal = new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", 10);
assert.equalsValue(animal.toString(), "Animal (Quilombito)");



console.log("CASE constructor fails on non-string name");
var errorThrown;

try {
  new Animal(undefined, new Date(2010, 2, 25, 18, 30), "GB", 10);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "name is not a string");



console.log("CASE constructor fails on non-Date birthdate");

var errorThrown;

try {
  new Animal("Quilombito", undefined, "GB", 10);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "birthdate is not a Date");


console.log("CASE constructor fails on non-string country");

var errorThrown;

try {
  new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), undefined, 10);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "country is not a string");


console.log("CASE constructor fails on non-number weight");
var errorThrown;

try {
  new Animal("Quilombito", new Date(2010, 2, 25, 18, 30), "GB", undefined);
} catch (error) {
  errorThrown = error;
}

assert.error(errorThrown, "TypeError", "weight is not a number");

/*
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


console.log('CASE toString')

var animal = new Animal("Quilombito", "dog", 10, 30, "male");
assert.equalsValue(animal.toString(), ('Animal', 'Sultan'))
*/
