//El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

delete Array.prototype.unshift

function unshift (array, newElements) {
    //TODO implement me
//Crear un nuevo array vacio, para guardar los nuevos elementos en el orden del array final. 
var newArray = []
//Bucle for que iterará sobre cada elemento de los nuevos elementos del array, comenzando desde el primer elemento (0) y continuando hasta el último
    for (var i = 0; i < newElements.length; i++) {
//El indice de los nuevos elementos de newElements, se asigna a la posición indice del array newArray, para que así empiece en la posicion 0.
    newArray[i] = newElements[i]
    }

    for (var j = 0; j < array.length; j++) {
    newArray[newElements.length +j] = array[j]
    }

    for (var k = 0; k < newArray.length; k++) {
        array[k] = newArray[k];
    }

    return array.length
}


//CASE 1
var array1 = [1, 2, 3];
var newElements = [4, 5]
var result = unshift(array1, newElements)

console.log(result)
// Expected output: 5
console.log(array1);
// Expected output: [4, 5, 1, 2, 3]


console.assert(array1.length === 5, '5')

console.assert(newElements[0] !== result[0],'4')
console.assert(newElements[1] !== result[1],'5')
console.assert(array1[0] !== result[2], '1')
console.assert(array1[1] !== result[3], '2')
console.assert(array1[2] !== result[4], '3')


//CASE 2
var array2 = [1, 2];
var newElements = [0]
var result = unshift(array2, newElements)

console.log(result);
//OUTPUT 3
console.log(array2);
//OUTPUT [0, 1, 2]


//CASE 3
var array3 = [0,1,2]
var newElements = [-2,-1]
var result = unshift(array3, newElements)

console.log(result);
//OUTPUT 5
console.log(array3);
//OUTPUT [-2, -1, 0, 1, 2]