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

console.log(length)
// 4

console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'violet',
    length: 4
}
*/


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


console.log('CASE 3: fails on undefined as object parameter')

var string = "pepe"
try {
    result = add(string, 85)
} catch (error) {
    console.log(error)
    // TypeError: pepe is not an object
}


console.log('CASE 4: fails on undefined as object parameter')

try {
    result = add(undefined, string)
} catch (error) {
    console.log(error)
    // TypeError: undefined is not an object
}


console.log('CASE 5: fails on undefined as object parameter')

try {
    result = add(68, string)
} catch (error) {
    console.log(error)
    // TypeError: 68 is not an object
}