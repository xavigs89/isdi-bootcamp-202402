// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

delete Array.prototype.find;

//debugger;
function find(array, callback) {
  //TODO implement me
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) 
    return array[i]
}
return undefined
}

{ 


  

console.log('CASE 1: find first number greater than 20');
var array1 = [5, 12, 8, 130, 44];

var result = find(array1, (element) => element > 20);




console.assert(result === 130, '130')
//130

var expectedResult = [5, 12, 8, 130, 44]

for (let i = 0; i < array1.length; i++) {
  console.assert(array1[i] === expectedResult[i], expectedResult[i])
}
console.assert(array1.length === expectedResult.length, expectedResult.length) 

/*
console.assert(array1[0] === 5, '5')
console.assert(array1[1] === 12, '12')
console.assert(array1[2] === 8, '8')
console.assert(array1[3] === 130, '130')
console.assert(array1[4] === 44, '44')
// [5, 12, 8, 130, 44]
console.assert(array1.length === 5, '5')
// [5]
*/
}

console.log('CASE 2: get undefined');
var array1 = [5, 12, 8, 130, 44];

var result = find(array1, (element) => element < 4);

/*console.log(result);
// Expected output: undefined
*/
console.assert(result === undefined, 'undefined')
//undefined

/*
console.assert(array1[0] === 5, '5')
console.assert(array1[1] === 12, '12')
console.assert(array1[2] === 8, '8')
console.assert(array1[3] === 130, '130')
console.assert(array1[4] === 44, '44')
// [5, 12, 8, 130, 44]
console.assert(array1.length === 5, '5')
// [5]
*/

var expectedResult = [5, 12, 8, 130, 44]

for (let i = 0; i < array1.length; i++) {
  console.assert(array1[i] === expectedResult[i], expectedResult[i])
}
console.assert(array1.length === expectedResult.length, expectedResult.length) 