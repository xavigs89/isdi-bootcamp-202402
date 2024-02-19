//Determina si todos los elementos en el array satisfacen una condición.
//Llamar este método en un array vacío devuelve true para cualquier condición

delete Array.prototype.every


function every(array, callback) {
    //TODO implement me
for (var i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
        return false
    }
   
}
return true

}


//CASE 1
var array1 = [30, 98, 64, 95, 35];
var result = every(array1, function (x) {return x < 100 })
console.log(result);
// Expected output: true

//CASE 2
var array1 = [25, 98, 64, 96, 35];
var result = every(array1, function (x) {return x < 50 })
console.log(result);
// Expected output: false

//CASE 3
var array1 = [];
var result = every(array1, function (x) {return x < 50 })
console.log(result);
// Expected output: true
