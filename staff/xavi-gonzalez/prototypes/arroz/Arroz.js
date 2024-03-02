function Arroz() {
    if (arguments.length !== 1) {
        this.length = arguments.length
        
        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            this[i] = argument
        }
    } else {
        var argument = arguments[0]

        if(typeof argument === 'number') {
            this.length = argument

            return
        }

        this[0] = argument
        this.length = 1
    }
}

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        this[this.length] = argument
        this.length++
    }

    return this.length
}

Arroz.prototype.pop = function () {
    var lastIndex = this.length - 1

    var last = this[lastIndex]

    delete this[lastIndex]

    this.length--

    return last
}

Arroz.prototype.toString = function () {
    var string = 'Arroz ['

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        string += element

        if (i < this.length - 1)
            string += ', '
    }

    string += ']'

    return string
}

Arroz.prototype.shift = function () {
    var firstIndex = 0

    var first = this[firstIndex]

    delete this[firstIndex]

    this.length--

    return first
}

Arroz.prototype.at = function (index) {
    if (index < 0) {
        index = index + this.length
    }
    return this[index]
}


Arroz.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            return this[i]
        }
    }
    return undefined
}


Arroz.prototype.filter = function (callback) {
    var newArroz = []

    for(var i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArroz[newArroz.length] = this[i]
        }
    }
    return newArroz
}

/*
Arroz.prototype.map = function (callback) {
    var newArroz = []

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArroz[newArroz.length] = this[i]
        }
    }
    return newArroz
}

*/


module.exports = Arroz