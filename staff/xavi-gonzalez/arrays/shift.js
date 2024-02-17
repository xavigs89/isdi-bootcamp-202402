/*El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
El método shift elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado.
Si la propiedad length es 0, devuelve undefined.*/

delete Array.prototype.shift

function shift(array) {
    var result = "";

    //TODO implement me
    if (array.length === 0) {
    return undefined
}
if (array.length > 0) {
    result = array[array.length - 1];
    array.length = array.length - 1;
    return result;
  }
}


//CASE 1

var array1 = [1, 2, 3];
var firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1