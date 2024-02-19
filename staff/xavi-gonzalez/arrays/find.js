// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

delete Array.prototype.find;

//debugger;
function find(array, callback) {
  //TODO implement me
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) 
    return array[i]
}
return undefined
}


//CASE 1
var array1 = [5, 12, 8, 130, 44];

var result = find(array1, (element) => element > 20);

console.log(result);
// Expected output: 130
