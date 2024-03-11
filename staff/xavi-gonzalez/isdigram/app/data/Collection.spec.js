const { expect } = require("../vendor/matcha")

describe('Collection', function () {
    describe('constructor', function () {
        it('creates a collection', function () {
            var cars = new Collection('cars')

            expect(cars).toBeInstanceOf(Collection)
        })
    })

    describe('_generateId', function () {
        it('generates a random id', function () {
            var cars = new Collection('cars')

            var id1 = cars._generateId()

            expect(typeof id1).toBe('string')

            var id2 = cars._generateId()

            expect(typeof id2).toBe('string')

            expect(id1 === id2).toBe(false)
        })
    })

    // TODO test all methods


    describe('_loadDocuments', function () {
        it('brings documents from localStorage as an Object', function () {
            var cars = new Collection('cars')
            
            var id1 = cars._loadDocuments()

            expect(typeof id1).toBe('object')

            var id2 = cars._loadDocuments()

            expect(typeof id2).toBe('object')

            expect(id1 === id2).toBe(false)
        })
    })

    describe('_saveDocuments', function () {
        it('saves the sent element as an Object', function () {
            var cars = new Collection('cars')

            var car1 = { brand: 'seat', model: 'leon'}
            cars._saveDocuments(car1)

           expect(cars).toBeInstanceOf(Object)
           expect(!!localStorage.cars).toBe(true)
           expect(typeof localStorage.cars).toBe('string')
           expect(localStorage.cars).toBe('{"brand":"seat", "model": "leon"}')
        })
    })

})