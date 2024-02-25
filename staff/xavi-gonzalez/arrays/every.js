//Determina si todos los elementos en el array satisfacen una condición.
//Llamar este método en un array vacío devuelve true para cualquier condición

delete Array.prototype.every


function every(array, callback) {
    //TODO implement me
for (var i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
        return false
    }
   
}
return true

}


//CASE 1
var array1 = [30, 98, 64, 95, 35];
var result = every(array1, function (x) {return x < 100 })

//console.log(result);
// Expected output: true


//ASSERTS

console.assert(result === true, true)
//'true'

console.assert(array1[0] === 30, '30')
console.assert(array1[1] === 98, '98')
console.assert(array1[2] === 64, '64')
console.assert(array1[3] === 95, '95')
console.assert(array1[4] === 35, '35')
// [30, 98, 64, 95, 35]
console.assert(array1.length === 5, '5')
// [5]

/*
var other = []
console.assert (other[0] === array1[0], '30')
console.assert (other[1] === array1[1], '98')
console.assert (other[2] === array1[2], '64')
console.assert (other[3] === array1[3], '95')
console.assert (other[4] === array1[4], '35')
console.assert (other.length === array1. length, '5')
*/

//FUNCIONES PARA ASSERTS
var expectedResult = [30, 98, 64, 95, 35]

for (let i = 0; i < array1.length; i++) {
  console.assert(array1[i] === expectedResult[i], expectedResult[i])
}
console.assert(array1.length === expectedResult.length, expectedResult.length)




//CASE 2
var array1 = [25, 98, 64, 96, 35];
var result = every(array1, function (x) {return x < 50 })
//console.log(result);
// Expected output: false


//ASSERTS

console.assert(result === false, false)
//'false'

console.assert(array1[0] === 25, '25')
console.assert(array1[1] === 98, '98')
console.assert(array1[2] === 64, '64')
console.assert(array1[3] === 96, '96')
console.assert(array1[4] === 35, '35')

// [25, 98, 64, 96, 35]
console.assert(array1.length === 5, '5')
// [5]


//FUNCIONES PARA ASSERTS
var expectedResult = [25, 98, 64, 96, 35]

for (let i = 0; i < array1.length; i++) {
  console.assert(array1[i] === expectedResult[i], expectedResult[i])
}
console.assert(array1.length === expectedResult.length, expectedResult.length)






//CASE 3
var array1 = [];
var result = every(array1, function (x) {return x < 50 })
//console.log(result);
// Expected output: true


//ASSERTS

console.assert(result === true, true)
//'true'


// []
console.assert(array1.length === 0, '0')
// [0]


//FUNCIONES PARA ASSERTS
var expectedResult = []

for (let i = 0; i < array1.length; i++) {
  console.assert(array1[i] === expectedResult[i], expectedResult[i])
}
console.assert(array1.length === expectedResult.length, expectedResult.length)
