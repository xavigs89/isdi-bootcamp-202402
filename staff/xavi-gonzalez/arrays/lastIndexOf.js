///El método lastIndexOf() devuelve el último índice en el que un cierto elemento puede encontrarse en el array, ó -1 si el elemento no se encontrara. El array es recorrido en sentido contrario, empezando por el índice fromIndex.


debugger
delete Array.prototype.lastIndexOf

function lastIndexOf(array, searchElement, index) {
  if (index >= array.length) {
    return -1;
  } else if ((index < 0 && array.length + index < 0) || index === undefined) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (searchElement === array[i]) {
        return i;
      }
    }
  } else if (index < 0 && array.length + index > 0) {
    for (var i = array.length + index; i >= 0; i--) {
      if (searchElement === array[i]) {
        return i;
      }
    }
  } else {
    for (var i = index; i >= 0; i--) {
      if (searchElement === array[i]) {
        return i;
      }
    }
  }
  return -1;
}

// CASE 1
console.log("CASE 1");

const animals = ["Dog", "Tiger", "Penguin", "Dog"];

//console.log(lastIndexOf(animals, "Dog"));
// Expected output: 3

//console.log(lastIndexOf(animals, "Tiger"));
// Expected output: 1


//ASSERTS

//console.assert(result === 1, 1)
//1

console.assert(animals[0] === "Dog", "Dog")
console.assert(animals[1] === "Tiger", "Tiger")
console.assert(animals[2] === "Penguin", "Penguin")
console.assert(animals[3] === "Dog", "Dog")
// ["Dog", "Tiger", "Penguin", "Dog"];
console.assert(animals.length === 4, '4')
// [4]

/*
var other = []
console.assert (other[0] === animals[0], "Dog")
console.assert (other[1] === animals[1], "Tiger")
console.assert (other[2] === animals[2], "Penguin")
console.assert (other[3] === animals[3], "Dog")
console.assert (other.length === animals. length, '4')
*/


// CASE 2
console.log("CASE 2");

const numbers = [2, 5, 9, 2];
//console.log(lastIndexOf(numbers, 2)); // 3
//console.log(lastIndexOf(numbers, 7)); // -1
//console.log(lastIndexOf(numbers, 2, 3)); // 3
//console.log(lastIndexOf(numbers, 2, 2)); // 0
//console.log(lastIndexOf(numbers, 2, -2)); // 0
//console.log(lastIndexOf(numbers, 2, -1)); // 3


//ASSERTS

//console.assert(result === 1, 1)
//1

console.assert(numbers[0] === 2, "2")
console.assert(numbers[1] === 5, "5")
console.assert(numbers[2] === 9, "9")
console.assert(numbers[3] === 2, "2")
// [2, 5, 9, 2];
console.assert(numbers.length === 4, '4')
// [4]

/*
var other = []
console.assert (other[0] === numbers[0], "Dog")
console.assert (other[1] === numbers[1], "Tiger")
console.assert (other[2] === numbers[2], "Penguin")
console.assert (other[3] === numbers[3], "Dog")
console.assert (other.length === numbers. length, '4')
*/