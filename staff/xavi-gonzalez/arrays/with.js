//El método with() es la versión copiada del uso de la notación entre corchetes para cambiar el valor de un índice determinado. Devuelve una nueva matriz con el elemento en el índice dado reemplazado por el valor dado.

delete Array.prototype.with

function withh (array, index, value) {
    //TODO implement me
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        newArray[newArray.length] = array[i]
    }
    newArray[index] = value

return newArray
}


//CASE 1
var arr = [1, 2, 3, 4, 5];
var result = withh(arr, 2,6)

//console.log(result); 
//OUTPUT [1, 2, 6, 4, 5]
 
//console.log(arr);
//OUTPUT [1, 2, 3, 4, 5]



//ASSERTS

//console.assert(result === "1", "2", "6", "4", "5")
//[1, 2, 6, 4, 5]

console.assert(arr[0] === result[0], '1')
console.assert(arr[1] === result[1], '2')
console.assert(arr[2] !== result[2], '6')
console.assert(arr[3] === result[3], '4')
console.assert(arr[4] === result[4], '5')

console.assert(arr[0] === 1, "1")
console.assert(arr[1] === 2, "2")
console.assert(arr[2] === 3, "3")
console.assert(arr[3] === 4, "4")
console.assert(arr[4] === 5, "5")
// [1, 2, 3, 4, 5]
console.assert(arr.length === 5, '5')
// [5]

/*
var other = []
console.assert (other[0] === arr[0], "1")
console.assert (other[1] === arr[1], "2")
console.assert (other[2] === arr[2], "3")
console.assert (other[3] === arr[3], "4")
console.assert (other[3] === arr[4], "5")
console.assert (other.length === arr. length, "5")
*/