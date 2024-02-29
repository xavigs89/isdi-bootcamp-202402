var Pet = require('./Pet')

function Cat(owner, name, birthdate, country, weight) {
    Cat.call(this, owner, name, birthdate, country, weight)
}