var Animal = require("./Animal");
Pet.prototype = new Animal()

function Pet(name, birthdate, country, weight) {
    this.name = name
    this.birthdate = birthdate
    this.country = country
    this.weight = weight
    this.sleeping = false
    this.eating = ''
    this.legsSpeed = Pet.NOT_WALK
}

Pet.NOT_WALK = 0
Pet.WALK_VERY_SLOW = 1
Pet.WALK_SLOW = 2
Pet.WALK_NORMAL = 4
Pet.WALK_FAST = 5
Pet.RUN = 6


Dog.NOT_WALK = 0
Dog.WALK_NORMAL = 1
Dog.RUN = 2


module.exports = Pet