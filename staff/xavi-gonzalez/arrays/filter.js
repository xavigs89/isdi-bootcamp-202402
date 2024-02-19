//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

delete Array.prototype.filter

function filter(array, callback) {
    //TODO implement me
    var newArray = []
    
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray
}
   

//CASE 1
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

var result = filter(words, function (x) {return x.length > 6 })
console.log(result);
// Expected output: ["exuberant", "destruction", "present"]


//CASE 2
var words = [25, 98, 64, 96, 35];

var result = filter(words, function (x) {return x > 30 })
console.log(result);
// Expected output: [98, 65, 96, 35]