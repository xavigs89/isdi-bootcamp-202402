//delete Array.prototype.push;

function push(array, ...element) {
  //TODO implement me
  //Creamos una variable sin definir (item), que se usa para almacenar el indice donde se va a agregar un elemento al final del array.
  var item;
  //Bucle for
  for (var i = 0; i < element.length; i++) {
    //Definimos que item es igual a la longitud total del array, para que lo nuevo se agregue al final.
    item = array.length;
    //La longitud del array se mete en los corchetes, dentro del array. Para asi añadirlo fisicamente en el array
    array[item] = element[i];
  }
  //Devolver la longitud actualizada del array
  return array.length;
}

//CASE 1
var nums = [100, 200, 300, 400, 500];
var length = push(nums, 600);

console.log(length);
//OUTPUT 6
console.log(nums);
//OUTPUT [100, 200, 300, 400, 500, 600]

//CASE 2
var animals = ["pigs", "goats", "sheep"];
var length = push(animals, "cows");

console.log(length);
//OUTPUT 4
console.log(animals);
//OUTPUT ["pigs", "goats", "sheep", "cows"]

//CASE 3
var sports = ["soccer", "baseball"];
var length = push(sports);

console.log(length);
//OUTPUT 2
console.log(sports);
//OUTPUT ["soccer", "baseball"]

//CASE 4
var sports = ["soccer", "baseball"];
var length = push(sports, undefined);

console.log(length);
//OUTPUT 3
console.log(sports);
//OUTPUT ["soccer", "baseball", undefined]



console.log("CASE 5");
var a = [10, 20, 30]
var length = push(nums, 40, 50, 60)

console.log(length);
//OUTPUT 6
console.log(nums);
//OUTPUT [10, 20, 30, 40, 50, 60]


console.log("CASE 5");
var a = [10, 20, 30]
var length = push(nums, 40, 50, 60)

console.log(length);
//OUTPUT 20
console.log(nums);
//OUTPUT [10, 20, 30, 40, 50, 60, 70, 80, 90, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]}

/*SOLUCION DEFINITIVA
delete Array.prototype.push

function push(array, element1) {
    // TODO implement me

    if (arguments.length > 1)
        array[array.length] = element1

    return array.length
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]

var length = push(nums, 600)

console.log(length)
// 6
console.log(nums)
// [100, 200, 300, 400, 500, 600]


console.log('CASE 2')

var animals = ['pigs', 'goats', 'sheep']

var length = push(animals, 'cows')

console.log(length)
// 4
console.log(animals)
// ['pigs', 'goats', 'sheep', 'cows']


console.log('CASE 3')

var sports = ['soccer', 'baseball']

var length = push(sports)

console.log(length)
// 2
console.log(sports)
// ['soccer', 'baseball']


console.log('CASE 4')

var sports = ['soccer', 'baseball']

var length = push(sports, undefined)

console.log(length)
// 3
console.log(sports)
// ['soccer', 'baseball', undefined]


console.log('CASE 5')

var nums = [10, 20, 30]

var length = nums.push(40, 50, 60)

console.log(length)
// 6
console.log(nums)
// [10, 20, 30, 40, 50, 60]
*/