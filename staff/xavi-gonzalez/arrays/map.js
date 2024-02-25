//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

delete Array.prototype.map

function map(array, callback) {
    var returnedArray = []
    for (var i = 0; i < array.length; i++) {
        returnedArray[returnedArray.length] = callback(array[i], i, array)
    }
    return returnedArray
}

console.log('CASE 1')

var nums = [10, 20, 30, 40, 50]

var numsX100 = map(nums, function (num) {
    return num * 100
})

console.log(numsX100)
// [1000, 2000, 3000, 4000, 5000]
console.log(nums)
// [10, 20, 30, 40, 50]

console.log('CASE 2')

var chars = ['a', 'b', 'c']

var charsInUpper = map(chars, function (char) {
    return char.toUpperCase()
})

console.log(charsInUpper)
// ['A', 'B', 'C']
console.log(chars)
// ['a', 'b', 'c']