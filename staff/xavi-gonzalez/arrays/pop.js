//El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

//delete Array.prototype.pop;

function pop(array) {
  //TODO implement me

  //Crear una variable para almacenar el resultado en un string
  var result = "";
  //
  if (array.length > 0) {
    result = array[array.length - 1];
    array.length = array.length - 1;
    return result;
  } else {
    return undefined;
  }
}

//CASE 1
var nums = [100, 200, 300, 400, 500];
var num = pop(nums);

console.log(num);
//OUTPUT 500
console.log(nums.length);
//OUTPUT 4
console.log(nums);
//OUTPUT [100, 200, 300, 400]

//CASE 2
var animals = ["pigs", "goats", "sheep", "cows"];
var animal = pop(animals);

console.log(animal);
//OUTPUT "cows"
console.log(animals.length);
//OUTPUT 3
console.log(animals);
//OUTPUT ["pigs", "goats", "sheep"]

//CASE 3
var sports = ["soccer", "baseball"];
var sport = pop(sports);

console.log(sport);
//OUTPUT "baseball"
console.log(sports.length);
//OUTPUT  1
console.log(sports);
//OUTPUT ["soccer"]

// CASE 4
var sports = [];
var sport = pop(sports);

console.log(sport);
//OUTPUT undefined
console.log(sports.length);
//OUTPUT  0
console.log(sports);
//OUTPUT []