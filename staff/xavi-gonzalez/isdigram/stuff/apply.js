function Person(name, surname, family, length) {
    this.name = name
    this.surname = surname
    this.family = []
    this.length = 0
}

var Pepe = new Person ('Perico', 'De los Palotes')
Person.prototype.salute = function () {
    return this.name + " " + this.surname + ': Hello!'
}
console.log(Pepe.salute () )
//Perico De los Palotes: Hello!


Person.prototype.saluteTo = function (who) {
    return this.name + " " + this.surname + ': Hello, ' + who + "!"
}
console.log(Pepe.saluteTo("Manolo"));
//Perico De los Palotes: Hello, Manolo!


Person.prototype.calculateSum = function () {
    var nums = arguments
    var sum = 0

    
}


