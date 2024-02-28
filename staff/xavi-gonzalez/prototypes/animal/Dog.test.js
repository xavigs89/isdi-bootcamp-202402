var assert = require("./assert");
var Dog = require("./Dog");


console.log("TEST Dog");

console.log("CASE constructor");

var dog = new Dog("Milagritos", "poodle", 3, 5, "female");

assert.equalsValue(dog.name, "Milagritos");
assert.equalsValue(dog.species, "poodle");
assert.equalsValue(dog.age, 3);
assert.equalsValue(dog.weight, 5);
assert.equalsValue(dog.gender, "female");
