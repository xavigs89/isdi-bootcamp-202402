// El método from() crea una nueva instancia de Array a partir de un objeto iterable.

delete Array.prototype.from;

function from(element, formula) {
  let newArray = [];

  if (formula === undefined) {
    for (var i = 0; i < element.length; i++) {
      newArray[i] = element[i];
    }
    return newArray;
  } else {
    for (var i = 0; i < element.length; i++) {
      newArray[i] = formula(element[i]);
    }
    return newArray;
  }
}

//CASE 1

var array = ["papaya"];
var result = from(array);
console.log(result);
//['p', 'a', 'p', 'a', 'y', 'a']
console.log(array.length);

//ASSERTS

//console.assert(result === 'p', 'a', 'p', 'a', 'y', 'a')
//['p', 'a', 'p', 'a', 'y', 'a']

console.assert(array[0] === 'papaya', 'papaya')

// ['papaya']
console.assert(array.length === 1, '1')
// [6]


//FUNCIONES PARA ASSERTS
var expectedResult = ['papaya']

for (let i = 0; i < array.length; i++) {
  console.assert(array[i] === expectedResult[i], expectedResult[i])
}
console.assert(array.length === expectedResult.length, expectedResult.length) 




//CASE 2

var arr = [1, 2, 3];
var result = from(arr, (x) => x + 1);
console.log(result);
//[2, 3, 4]


//ASSERTS

//console.assert(result === 2, 3, 4, '2','3','4')
//[2, 3, 4]

console.assert(arr[0] === 1, '1')
console.assert(arr[1] === 2, '2')
console.assert(arr[2] === 3, '3')


// ['1,2,3']
console.assert(arr.length === 3, '3')
// [3]

//FUNCIONES PARA ASSERTS
var expectedResult = [1, 2, 3]

for (let i = 0; i < arr.length; i++) {
  console.assert(arr[i] === expectedResult[i], expectedResult[i])
}
console.assert(arr.length === expectedResult.length, expectedResult.length) 




//CASE 3
var result = from(arr, (x) => x + x);
console.log(result);
//[2, 4, 6]


//ASSERTS

//console.assert(result === 2, 4, 6, '2','4','6')
//[2, 4, 6]

console.assert(arr[0] === 1, '1')
console.assert(arr[1] === 2, '2')
console.assert(arr[2] === 3, '3')


// ['1,2,3']
console.assert(arr.length === 3, '3')
// [3]

