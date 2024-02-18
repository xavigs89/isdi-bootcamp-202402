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

console.log(lastIndexOf(animals, "Dog"));
// Expected output: 3

console.log(lastIndexOf(animals, "Tiger"));
// Expected output: 1


// CASE 2
console.log("CASE 2");

const numbers = [2, 5, 9, 2];
console.log(lastIndexOf(numbers, 2)); // 3
console.log(lastIndexOf(numbers, 7)); // -1
console.log(lastIndexOf(numbers, 2, 3)); // 3
console.log(lastIndexOf(numbers, 2, 2)); // 0
console.log(lastIndexOf(numbers, 2, -2)); // 0
console.log(lastIndexOf(numbers, 2, -1)); // 3