// El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.


delete Array.prototype.includes;
function includes(array, value, fromIndex) {
  if (fromIndex === undefined) {
    for (var i = 0; i < array.length; i++) {
      if (value === array[i]) return true;
    }
  } else if (fromIndex !== undefined) {
    for (var j = fromIndex; j < array.length; j++) {
      if (value === array[j]) return true;
    }
  }
  return false;
}

//arr.includes(value[, fromIndex])

//CASE 1
var arr = ["pepe", "manolo", "paco", "luis"];
//var element = "pepe"; //value;
//var position = 1; //fromindex
var result = includes(arr, "pepe", 1);
console.log(result);
//false

//CASE 2
var arr = [4, 8, 15, 16, 23, 42];
//var element = 15
//var position = 2
var result = includes(arr, 15, 2);
console.log(result);
//true

//CASE 3
var arr = [4, 8, 15, 16, 23, 42];
var result = includes(arr, 4, 3);
console.log(result);
//false

//CASE 4
var arr = [4, 8, 15, 16, 23, 42];
var result = includes(arr, 40, 0);
console.log(result);
//false

//CASE 5
var arr = [4, 8, 15, 16, 23, 42];
var result = includes(arr, 15, 1);
console.log(result);
//false

//SOLUCION FACIL
function includes(array, value) {
  debugger;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

var arr = ["hola", "amigo", "como", "te", "va"];
result = includes(arr, "como");
console.log(result);
//OUTPUT True

var arr = ["hola", "amigo", "como", "te", "va"];
result = includes(arr, 5);
console.log(result);
//OUTPUT False



//SOLUCION MANU

delete Array.prototype.includes

function includes(array, value, fromIndex) {
    var targetIndex = 0

    if (arguments.length > 2)
        if (fromIndex > -1)
            targetIndex = fromIndex
        else
            targetIndex = array.length + fromIndex

    for (var i = targetIndex; i < array.length; i++) {
        var element = array[i]

        if (element === value)
            return true
    }

    return false
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]

var result = includes(nums, 600)

console.log(result)
// false

console.log('CASE 2')

var animals = ['pigs', 'goats', 'sheep', 'cows']

var result = includes(animals, 'sheep')

console.log(result)
// true

console.log('CASE 3')

var nums = [10, 20, 30]

var result = includes(nums, 30, 3)

console.log(result)
// false

console.log('CASE 4')

var nums = [10, 20, 30]

var result = includes(nums, 30, 1)

console.log(result)
// true

console.log('CASE 5')

var animals = ['pigs', 'goats', 'sheep', 'cows']

var result = includes(animals, 'cows', 2)

console.log(result)
// true

console.log('CASE 6')

var animals = ['pigs', 'goats', 'sheep', 'cows']

var result = includes(animals, 'goats', 2)

console.log(result)
// false


console.log('CASE 7')

var animals = ['pigs', 'goats', 'sheep', 'cows']

var result = includes(animals, 'goats', -3)

console.log(result)
// true

console.log('CASE 8')

var animals = ['pigs', 'goats', 'sheep', 'cows']

var result = includes(animals, 'goats', -2)

console.log(result)
// false