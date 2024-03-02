var matcha = require('./matcha')

var Arroz = require('./arroz')

matcha.describe('Arroz', function () {
    matcha.describe('> constructor', function () {
        matcha.it('should construct', function () {
            var a = new Arroz

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(0)
        })

        matcha.it('should construct with multiple values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(3)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
        })

        matcha.it('should construct with one non-numeric value', function () {
            var a = new Arroz(true)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(1)
            matcha.expect(a[0]).toBe(true)
        })

        matcha.it('should construct with one numeric value', function () {
            var a = new Arroz(5)

            matcha.expect(a).toBeInstanceOf(Arroz)
            matcha.expect(a.length).toBe(5)
            for (var i = 0; i < a.length; i++)
                matcha.expect(a[i]).toBe(undefined)
        })
    })
    matcha.describe('> push', function () {
        matcha.it('should push a value', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)

            var length = a.push(40)

            matcha.expect(a.length).toBe(4)
            matcha.expect(a[a.length - 1]).toBe(40)
            matcha.expect(length).toBe(4)
        })

        matcha.it('should push many values', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.push).toBe(true)

            var length = a.push(40, 50, 60, 70)

            matcha.expect(a.length).toBe(7)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)
            matcha.expect(a[5]).toBe(60)
            matcha.expect(a[6]).toBe(70)
            matcha.expect(length).toBe(7)
        })
    })

    matcha.describe('> pop', function (){
        matcha.it('should extract last value', function () {
            var a = new Arroz(10, 20, 30)

            matcha.expect(!!a.pop).toBe(true)

            var value = a.pop()

            matcha.expect(a.length).toBe(2)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(undefined)
            matcha.expect(value).toBe(30)
        })
    })

    matcha.describe('> toString', function () {
        matcha.it('should convert to string', function () {
            var a = new Arroz(10, 20, 30, 40, 50)

            matcha.expect(!!a.toString).toBe(true)

            var string = a.toString()

            matcha.expect(string).toBe('Arroz [10, 20, 30, 40, 50]')
        })
    })

    matcha.describe('> shift', function () {
        matcha.it('should delete first element', function () {
            var a = new Arroz(10, 20, 30, 40, 50)

            matcha.expect(!!a.shift).toBe(true)

            var first = a.shift()

            matcha.expect(a.length).toBe(4)
            matcha.expect(a[0]).toBe(undefined)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)
            matcha.expect(first).toBe(10)
        })
    })


    matcha.describe('> at', function () {
        matcha.it('should return position of Arroz in positive', function () {
            var a = new Arroz(10, 20, 30, 40, 50)

            matcha.expect(!!a.at).toBe(true)

            var atValuePositive = a.at(3)

            matcha.expect(atValuePositive).toBe(40)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)
            matcha.expect(a[5]).toBe(undefined)
        })
        
        matcha.it('should return position of Arroz in negative', function () {
            var a = new Arroz(10, 20, 30, 40, 50)

            matcha.expect(!!a.at).toBe(true)

            var atValueNegative = a.at(-3)

            matcha.expect(atValueNegative).toBe(30)
            matcha.expect(a[0]).toBe(10)
            matcha.expect(a[1]).toBe(20)
            matcha.expect(a[2]).toBe(30)
            matcha.expect(a[3]).toBe(40)
            matcha.expect(a[4]).toBe(50)
            matcha.expect(a[5]).toBe(undefined)
        })

    })

    matcha.describe('> find', function () {
        matcha.it('should return first number greater than 30', function () {
            var a = new Arroz(6, 12, 32, 98, 8)

            matcha.expect(!!a.find).toBe(true)

            var value = a.find(function(element){
                return element > 30
            })

            matcha.expect(a.length).toBe(5)
            matcha.expect(value).toBe(32)
            matcha.expect(a[0]).toBe(6)
            matcha.expect(a[1]).toBe(12)
            matcha.expect(a[2]).toBe(32)
            matcha.expect(a[3]).toBe(98)
            matcha.expect(a[4]).toBe(8)
        })
    })


    matcha.describe('> filter', function () {
        matcha.it('should return values with more than 6 letters', function () {
            var a = new Arroz('seat', 'ferrari', 'bmw', 'mercedes', 'lamborghini')

            matcha.expect(!!a.filter).toBe(true)

            var value = a.filter(function(word){
                return word.length > 6
            })

            matcha.expect(a.length).toBe(5)
            matcha.expect(value).toBe('ferrari,mercedes,lamborghini')
            /*
            matcha.expect(value[0]).toBe('ferrari')
            matcha.expect(value[1]).toBe('mercedes')
            matcha.expect(value[2]).toBe('lamborghini')
            */
            matcha.expect(a[0]).toBe('seat')
            matcha.expect(a[1]).toBe('ferrari')
            matcha.expect(a[2]).toBe('bmw')
            matcha.expect(a[3]).toBe('mercedes')
            matcha.expect(a[4]).toBe('lamborghini')
        })
    })

/*
    matcha.describe('> map', function () {
        matcha.it('should return nums values * 2', function () {
            var a = new Arroz(10, 20, 30, 40, 50)

            matcha.expect(!!a.map).toBe(true)

            var value = a.map(function(x){
                return x * 2
            })

            matcha.expect(value[0]).toBe(20)
            matcha.expect(value[1]).toBe(40)
            matcha.expect(value[2]).toBe(60)
            matcha.expect(value[3]).toBe(80)
            matcha.expect(value[4]).toBe(100)
        })
    })
*/



})