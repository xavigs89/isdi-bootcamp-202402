var assert = require('./assert')

var Animal = require('./Animal')
var Pet = require('./Pet')
var Dog = require('./Dog')
var Person = require('./Person')

console.log('TEST Dog')

console.log('CASE constructor')

var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
var dog = new Dog(peter, 'Milagritos', new Date(2000, 0, 31, 16, 45), 'GB', 50)

assert.equalsValue(dog.constructor, Dog)
assert.instanceOf(dog, Dog)
assert.instanceOf(dog, Pet)
assert.instanceOf(dog, Animal)

assert.equalsValue(dog.name, 'Milagritos')
assert.instanceOf(dog.birthdate, Date)
assert.equalsValue(dog.birthdate.getFullYear(), 2000)
assert.equalsValue(dog.birthdate.getMonth(), 0)
assert.equalsValue(dog.birthdate.getDate(), 31)
assert.equalsValue(dog.birthdate.getHours(), 16)
assert.equalsValue(dog.birthdate.getMinutes(), 45)
assert.equalsValue(dog.country, 'GB')
assert.equalsValue(dog.weight, 50)
assert.equalsValue(dog.sleeping, false)
assert.equalsValue(dog.eating, '')
assert.equalsValue(dog.legsSpeed, 0)
assert.equalsValue(dog.barking, false)

console.log('CASE bark')

var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
var dog = new Dog(peter, 'Milagritos', new Date(2000, 0, 31, 16, 45), 'GB', 50)

dog.bark()

assert.equalsValue(dog.barking, true)


console.log('CASE tsssh')

var peter = new Person('Peter', 'Pan', new Date(2000, 0, 31, 16, 45), 'GB', 140, 50)
var dog = new Dog(peter, 'Milagritos', new Date(2000, 0, 31, 16, 45), 'GB', 50)

dog.barking = true

dog.tsssh()

assert.equalsValue(dog.barking, false)