/*El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
Si el separador se omite, los elementos del array son separados por defecto con una coma (","). Si el separador es una cadena vacía, todos los elementos son unidos sin ningún carácter entre ellos.
Si arr.length es 0, se devuelve la cadena vacía.*/

delete Array.prototype.join;

function join(array, separator) {
  //TODO implement me
  var result = "";
  if (separator === undefined) {
    separator = ",";
  }

  if (array.length === 0) {
    return result;
  }
  for (var i = 0; i < array.length - 1; i++) {
    result += array[i] + separator;
  }
  result += array[array.length - 1];
  return result;
}

//CASE 1
var elements = ["Fire", "Air", "Water"];
var result = join(elements);
//console.log(result);
// Expected output: "Fire,Air,Water"


//ASSERTS

console.assert(result === "Fire,Air,Water")
//"Fire,Air,Water"

console.assert(elements[0] === 'Fire', 'Fire')
console.assert(elements[1] === 'Air', 'Fire')
console.assert(elements[2] === 'Water', 'Fire')

// ["Fire", "Air", "Water"];
console.assert(elements.length === 3, '3')
// [3]

/*
var other = []
console.assert (other[0] === elements[0], 'Fire')
console.assert (other[1] === elements[1], 'Air')
console.assert (other[2] === elements[2], 'Water')
console.assert (other.length === elements. length, '3')
*/


var result = join(elements, "");
//console.log(result);
// Expected output: "FireAirWater"

//ASSERTS

console.assert(result === "FireAirWater")
//"FireAirWater"

console.assert(elements[0] === 'Fire', 'Fire')
console.assert(elements[1] === 'Air', 'Fire')
console.assert(elements[2] === 'Water', 'Fire')

// ["Fire", "Air", "Water"];
console.assert(elements.length === 3, '3')
// [3]

/*
var other = []
console.assert (other[0] === elements[0], 'Fire')
console.assert (other[1] === elements[1], 'Air')
console.assert (other[2] === elements[2], 'Water')
console.assert (other.length === elements. length, '3')
*/



var result = join(elements, " ");
//console.log(result);
// Expected output: "Fire Air Water"

//ASSERTS

console.assert(result === "Fire Air Water")
//"Fire Air Water"

console.assert(elements[0] === 'Fire', 'Fire')
console.assert(elements[1] === 'Air', 'Fire')
console.assert(elements[2] === 'Water', 'Fire')

// ["Fire", "Air", "Water"];
console.assert(elements.length === 3, '3')
// [3]

/*
var other = []
console.assert (other[0] === elements[0], 'Fire')
console.assert (other[1] === elements[1], 'Air')
console.assert (other[2] === elements[2], 'Water')
console.assert (other.length === elements. length, '3')
*/


var result = join(elements, "-");
//console.log(result);
// Expected output: "Fire-Air-Water"

//ASSERTS

console.assert(result === "Fire-Air-Water")
//"Fire-Air-Water"

console.assert(elements[0] === 'Fire', 'Fire')
console.assert(elements[1] === 'Air', 'Fire')
console.assert(elements[2] === 'Water', 'Fire')

// ["Fire", "Air", "Water"];
console.assert(elements.length === 3, '3')
// [3]

/*
var other = []
console.assert (other[0] === elements[0], 'Fire')
console.assert (other[1] === elements[1], 'Air')
console.assert (other[2] === elements[2], 'Water')
console.assert (other.length === elements. length, '3')
*/


var result = join(elements, "+");
//console.log(result);
// Expected output: "Fire+Air+Water"

//ASSERTS

console.assert(result === "Fire+Air+Water")
//"Fire+Air+Water"

console.assert(elements[0] === 'Fire', 'Fire')
console.assert(elements[1] === 'Air', 'Fire')
console.assert(elements[2] === 'Water', 'Fire')

// ["Fire", "Air", "Water"];
console.assert(elements.length === 3, '3')
// [3]

/*
var other = []
console.assert (other[0] === elements[0], 'Fire')
console.assert (other[1] === elements[1], 'Air')
console.assert (other[2] === elements[2], 'Water')
console.assert (other.length === elements. length, '3')
*/
