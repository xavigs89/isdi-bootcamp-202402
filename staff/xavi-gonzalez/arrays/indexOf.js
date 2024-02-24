// El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
//Funcion que toma dos parámetros: array, que es donde se va a buscar, y searchElement, que es el elemento que se va a buscar dentro del array.

delete Array.prototype.indexOf;

function indexOf(array, searchElement) {
  //Iniciar un bucle for que recorre el array. La variable i se inicia en 0 y se incrementa en cada iteración hasta que i sea menor que la longitud del array (array.length).
  for (var i = 0; i < array.length; i++) {
    //Dentro del bucle for, se verifica si el elemento actual del array principal (array[i]) es igual al elemento que estamos buscando (searchElement).
    if (array[i] === searchElement) {
      //Si el elemento actual del array coincide con el elemento que estamos buscando, se devuelve el índice en el que se encuentra ese elemento en el array.
      return i;
    }
  }
  //Si cuando se completa el bucle for no se encuentra el elemento en el array, se devuelve -1 para indicar que el elemento no está presente dentro del array.
  return -1;
}

// CASE 1
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
var element = "Apple";
var s = indexOf(fruits, element);

//console.log(s);
//OUTPUT 2


//ASSERTS

console.assert(s === 2, '2')
//'2'

console.assert(fruits[0] === 'Banana', 'Banana')
console.assert(fruits[1] === 'Orange', 'Orange')
console.assert(fruits[2] === 'Apple', 'Apple')
console.assert(fruits[3] === 'Mango', 'Mango')
console.assert(fruits[4] === 'Pineapple', 'Pineapple')


// ["Banana", "Orange", "Apple", "Mango", "Pineapple"]
console.assert(fruits.length === 5, '5')
// [5]


//FUNCIONES PARA ASSERTS
var expectedResult = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];

for (let i = 0; i < fruits.length; i++) {
  console.assert(fruits[i] === expectedResult[i], expectedResult[i])
}
console.assert(fruits.length === expectedResult.length, expectedResult.length) 




// CASE 2
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
var element = "Kiwi";
var s = indexOf(fruits, element);

//console.log(s);
//OUTPUT -1


//ASSERTS

console.assert(s === -1, '-1')
//'-1'

console.assert(fruits[0] === 'Banana', 'Banana')
console.assert(fruits[1] === 'Orange', 'Orange')
console.assert(fruits[2] === 'Apple', 'Apple')
console.assert(fruits[3] === 'Mango', 'Mango')
console.assert(fruits[4] === 'Pineapple', 'Pineapple')
// ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

console.assert(fruits.length === 5, '5')
// [5]


//FUNCIONES PARA ASSERTS
var expectedResult = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];

for (let i = 0; i < fruits.length; i++) {
  console.assert(fruits[i] === expectedResult[i], expectedResult[i])
}
console.assert(fruits.length === expectedResult.length, expectedResult.length) 


// CASE 3
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
var element = 0;
var s = indexOf(fruits, element);

//console.log(s);
//OUTPUT -1


//ASSERTS

console.assert(s === -1, '-1')
//'-1'

console.assert(fruits[0] === 'Banana', 'Banana')
console.assert(fruits[1] === 'Orange', 'Orange')
console.assert(fruits[2] === 'Apple', 'Apple')
console.assert(fruits[3] === 'Mango', 'Mango')
console.assert(fruits[4] === 'Pineapple', 'Pineapple')
// ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

console.assert(fruits.length === 5, '5')
// [5]


//FUNCIONES PARA ASSERTS
var expectedResult = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];

for (let i = 0; i < fruits.length; i++) {
  console.assert(fruits[i] === expectedResult[i], expectedResult[i])
}
console.assert(fruits.length === expectedResult.length, expectedResult.length) 
