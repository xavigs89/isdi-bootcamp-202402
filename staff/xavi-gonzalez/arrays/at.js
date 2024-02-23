//El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.

delete Array.prototype.at;
function at(array, index) {
  //TODO implement me
  //Crear una variable auxiliar "result" para el caracter a extraer
  var result;
  //Mirar el indice si es positivo o negativo, plantear dos flujos
  if (index >= 0) {
    //alternativa: poner > -1, porque asi ya empieza a contar desde 0
    //En caso de que indice sea positivo, extraer el caracter del array, a partir del indice (pasandolo por corchetes), y asignarlo a la variable "result"
    result = array[index];
    //En caso de que indice sea negativo, calcular la posicion del resultado a extraer, restando a la longitud del array el valor del indice (pasando el resultado entre corchetes) y asignarlo a la variable "result"
  } else {
    var newIndex = array.length + index;
    result = array[newIndex];
    //Retornar el valor de "result"
  }
  return result;
}

//CASE 1
var nums = [100, 200, 300, 400, 500];
var num = at(nums, 3);


console.log(num);
//OUTPUT 400


console.assert(num === 400, '400')
//400


console.assert(nums[0] === 100, '100')
console.assert(nums[1] === 200, '200')
console.assert(nums[2] === 300, '300')
console.assert(nums[3] === 400, '400')
console.assert(nums[4] === 500, '500')
// [100, 200, 300, 400, 500]
console.assert(nums.length === 5, '5')
// [5]





/*

//CASE 2
var chars = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];
var char = at(chars, 4);

console.log(char);
//OUTPUT " "

//CASE 3
var chars = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];
var char = at(chars, -3);

console.log(char);
//OUTPUT "n"

//CASE 4
var chars = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];
var char = at(chars, -30);

console.log(char);
//OUTPUT undefined

//SOLUCION ALTERNATIVA:
function at(array, index) {
  if (index > -1) {
    return element;
  } else {
    var newIndex = array.length + index;
    var element = array[newIndex];

    return element;
  }
}
*/