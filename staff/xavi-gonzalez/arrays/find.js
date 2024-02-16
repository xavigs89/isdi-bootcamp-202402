// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

delete Array.prototype.find;

debugger;
function find(array, element) {
  var newArray = [];
  debugger;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) newArray[newArray.length] = array[i];
    return newArray
}
}

//CASE 1
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 20);

console.log(found);
// Expected output: 130
