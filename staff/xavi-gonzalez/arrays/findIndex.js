//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

delete Array.prototype.findIndex

function findIndex(array, callback) {
    //TODO implement me
 debugger;
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) 
    return i
}
return undefined
}

//CASE 1
const array1 = [5, 12, 8, 130, 44];

const found = findIndex(array1, (element) => element > 20);

//console.log(found);
// Expected output: 3



//ASSERTS

console.assert(found === 3, 3)
//'3'

console.assert(array1[0] === 5, '5')
console.assert(array1[1] === 12, '12')
console.assert(array1[2] === 8, '8')
console.assert(array1[3] === 130, '130')
console.assert(array1[4] === 44, '44')

// [5, 12, 8, 130, 44]
console.assert(array1.length === 5, '5')
// [5]


//FUNCIONES PARA ASSERTS
var expectedResult = [5, 12, 8, 130, 44]

for (let i = 0; i < array1.length; i++) {
  console.assert(array1[i] === expectedResult[i], expectedResult[i])
}
console.assert(array1.length === expectedResult.length, expectedResult.length)





