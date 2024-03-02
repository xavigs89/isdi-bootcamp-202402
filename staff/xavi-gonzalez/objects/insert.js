/**
 * Inserts an element in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to insert the given values.
 * @param value - The value to insert.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function insert(object, index, value) {
    if (object instanceof Object === false)
        throw new TypeError(object + ' is not an Object')
    else if (!(typeof index === 'number'))
        throw new TypeError(index + ' is not a number')
    else {
        object.length++
        for (var i = object.length - 1; i > index; i--){
            object[i] = object[i - 1]
        }
        object[index] = value
        return object.length
    }    
}

console.log('CASE 1: insert skyblue in index 1')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = insert(colors, 1, 'skyblue')

console.log(length)
// 4

console.log(colors)
/*
{
    0: 'red',
    1: 'skyblue',
    2: 'blue',
    3: 'green',
    length: 4
}
*/

console.log('CASE 2')

colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
length = insert(colors, 3, 'silver')
console.log(length)
//4
console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'silver',
    length: 4
}
*/

console.log('CASE 3: fails on undefind object parameter')

try {
    insert()
} catch (error) {
    console.log(error)
    // TypeError: undefined is not an Object
}

console.log('CASE 4: fails on 1 as an object parameter')

try {
    insert(1)
} catch (error) {
    console.log(error)
    // TypeError: 1 is not an Object
}

console.log('CASE 5: fails on undefined as index parameter')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

try {
    insert(colors)
} catch (error) {
    console.log(error)
    // TypeError: undefined is not a Number
}