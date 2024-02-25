//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

delete Array.prototype.push;

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



console.log('CASE 1')
var nums = [100, 200, 300, 400, 500]
var length = push(nums, 600)

console.assert(length === 6, '6')

console.assert(nums[0] === nums[0], '100')
console.assert(nums[1] === nums[1], '200')
console.assert(nums[2] === nums[2], '300')
console.assert(nums[3] === nums[3], '400')
console.assert(nums[4] === nums[4], '500')
console.assert(nums[5] === nums[5], '600')



console.log('CASE 2')
var animals = ["pigs", "goats", "sheep"]
var length = push(animals, "cows")

console.assert(length === 4,'4')

console.assert(animals[0] === animals[0], 'pigs')
console.assert(animals[1] === animals[1], 'goats')
console.assert(animals[2] === animals[2], 'sheep')
console.assert(animals[3] === animals[3], 'cows')




console.log('CASE 3')
var sports = ["soccer", "baseball"]
var length = push(sports, undefined)

console.assert(length === 3, '3')

console.assert(sports[0] === sports[0], 'soccer')
console.assert(sports[1] === sports[1], 'baseball')
console.assert(sports[2] === sports[2], undefined)





console.log("CASE 4")
var a = [10, 20, 30]
var length = push(a, 40, 50, 60)

console.assert(length === 6, '6')

console.assert(a[0] === a[0], '10')
console.assert(a[1] === a[1], '20')
console.assert(a[2] === a[2], '30')
console.assert(a[3] === a[3], '40')
console.assert(a[4] === a[4], '50')
console.assert(a[5] === a[5], '60')





console.log("CASE 5")
var b = [10, 20, 30]
var length = push(b, 40, 50, 60, 70, 80, 90, 110, 120, 130)

console.assert(length === 12)

console.assert(a[0] === a[0], '10')
console.assert(a[1] === a[1], '20')
console.assert(a[2] === a[2], '30')
console.assert(a[3] === a[3], '40')
console.assert(a[4] === a[4], '50')
console.assert(a[5] === a[5], '60')
console.assert(a[6] === a[6], '70')
console.assert(a[7] === a[7], '80')
console.assert(a[8] === a[8], '90')
console.assert(a[9] === a[9], '110')
console.assert(a[10] === a[10], '120')
console.assert(a[11] === a[11], '130')




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