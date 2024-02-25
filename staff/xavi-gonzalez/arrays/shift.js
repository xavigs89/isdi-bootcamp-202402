/*El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
El método shift elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado.
Si la propiedad length es 0, devuelve undefined.*/

delete Array.prototype.shift

function shift(array) {
  //TODO implement me
  //Crear una variable result vacía. Esta variable se usa para guardar el último elemento del array antes de borrarlo.
  var result;

    //Si la longitud del array es 0, devuelve "undefined".
    if (array.length === 0) {
      return undefined
  }
//Si length es mayor a 0 (lo cual tiene elementos)
if (array.length > 0) {
  result = array[0]
//Se le asigna a result el último elemento del array con length -1.
  for (var i = 0; i < array.length; i++)
    array[i] = array [i + 1];
//Se reduce la longitud del array en 1, asi se elimina el último elemento del array.
   array.length --;
   
  }
  return result;
}


//CASE 1
var array1 = [1, 2, 3];
var firstElement = shift(array1);

console.log(array1);
//OUTPUT [2, 3]

console.log(firstElement);



//OUTPUT: 1

//CASE 2
var array2 = [58, 45, 93, 156];
var firstElement = shift(array2);

console.log(array2);
//OUTPUT [45, 93, 156]

console.log(firstElement);
//OUTPUT: 58

//CASE 3
var array3 = [];
var firstElement = shift(array3);

console.log(array3);
//OUTPUT [undefined]

console.log(firstElement);
//OUTPUT: undefined

//CASE 4
var array2 = [58, 45, 93, 156, 589, 684, 98];
var firstElement = shift(array2);

console.log(array2);
//OUTPUT [45, 93, 156, 589, 684, 98]

console.log(firstElement);
//OUTPUT: 58
