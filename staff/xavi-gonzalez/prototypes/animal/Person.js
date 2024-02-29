var Animal = require('./Animal')

function Person(name, surname, birthdate, country, height, weight) {
    Animal.call(this, name, birthdate, country, weight)

    this.surname = surname
    this.height = height
    this.talking = false
}

Person.prototype = Object.create(Animal.prototype)
Person.prototype.constructor = Person

Person.NOT_WALK = 0
Person.WALK_NORMAL = 1
Person.RUN = 2

Person.prototype.talk = function () {
    this.talking = true
}

module.exports = Person