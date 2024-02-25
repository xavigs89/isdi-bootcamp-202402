/**
 * Adds an element in an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param value - The value to add.
 * 
 * @throws {TypeError} When object is not an object.
 */
function add(object, value) {
    if (arguments.length === 1) {
        return object.length
    }

    else if (!(object instanceof Object)) {
        throw new TypeError(object + ' is not an Object') 
        }

    else { 
    object[object.length] = value 

    object.length++

    return object.length
    }
}



console.log('CASE 1: add violet in colors')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = add(colors, 'violet')

//console.log(length)
// 4

//console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'violet',
    length: 4
}
*/

//ASSERTS
/*
console.assert(colors === 'red', 'blue', 'green', 'violet',)
//400
*/
console.assert(colors[0] === 'red', 'red')
console.assert(colors[1] === 'blue', 'blue')
console.assert(colors[2] === 'green', 'green')
console.assert(colors[3] === 'violet', 'violet')

console.assert(colors.length === 4, '4')
// [4]

/*
var other = {}
console.assert (other[0] === colors[0], 'red')
console.assert (other[1] === colors[1], 'blue')
console.assert (other[2] === colors[2], 'green')
console.assert (other[3] === colors[3], 'violet')
console.assert (other.length === colors.length, '4')
*/

//FUNCIONES PARA ASSERTS
var expectedResult = {
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'violet',
    length: 4
}

for (let i = 0; i < colors.length; i++) {
  console.assert(colors[i] === expectedResult[i], expectedResult[i])
}
console.assert(colors.length === expectedResult.length, expectedResult.length) 



console.log('CASE 2: what if you do not assign a value');

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = add(colors)

console.log(length)
// 4

console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
*/


console.log('CASE 3: fails on undefined as string parameter')

var string = "pepe"
try {
    result = add(string, 85)
} catch (error) {
    console.log(error)
    // TypeError: pepe is not an object
}

console.assert(error.name === 'TypeError', 'name')
console.assert(error.message === 'pepe is not an object', 'message')


console.log('CASE 4: fails on undefined as undefined parameter')

try {
    result = add(undefined, string)
} catch (error) {
    console.log(error)
    // TypeError: undefined is not an object
}


console.log('CASE 5: fails on undefined as number parameter')

try {
    result = add(68, string)
} catch (error) {
    console.log(error)
    // TypeError: 68 is not an object
}