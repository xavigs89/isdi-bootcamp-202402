//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

delete Array.prototype.findIndex

function findIndex(array, callback) {
    //TODO implement me
 debugger;
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) 
    return i
}
return undefined
}

//CASE 1
const array1 = [5, 12, 8, 130, 44];

const found = findIndex(array1, (element) => element > 20);

console.log(found);
// Expected output: 3





