/*El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
El método shift elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado.
Si la propiedad length es 0, devuelve undefined.*/

delete Array.prototype.shift

function shift(array) {
  //TODO implement me
  //Crear una variable result vacía. Esta variable se usa para guardar el último elemento del array antes de borrarlo.
    var result = "";

    //Si la longitud del array es 0, devuelve "undefined".
    if (array.length === 0) {
    return undefined
}
//Si length es mayor a 0 (lo cual tiene elementos)
if (array.length > 0) {
//Se le asigna a result el último elemento del array con length -1.
    result = array[array.length - 1];
//Se reduce la longitud del array en 1, asi se elimina el último elemento del array.
    array.length = array.length - 1;
    return result;
  }
}


//CASE 1
var array1 = [1, 2, 3];
var firstElement = array1.shift();

console.log(array1);
//OUTPUT [2, 3]

console.log(firstElement);
//OUTPUT: 1


//CASE 2
var array2 = [58, 45, 93, 156];
var firstElement = array2.shift();

console.log(array2);
//OUTPUT [45, 93, 156]

console.log(firstElement);
//OUTPUT: 58


//CASE 3
var array3 = [];
var firstElement = array3.shift();

console.log(array3);
//OUTPUT [undefined]

console.log(firstElement);
//OUTPUT: undefined