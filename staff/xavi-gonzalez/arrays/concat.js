//delete String.prototype.concat;
//var separator = " ";
function concat(arr1, arr2) {
  // TODO implement
  //crear una variable vacia para almacenar el nuevo array concatenado
  var concatenatedArray = [];
  //iterar a través de cada elemento del primer array
  for (var i = 0; i < arr1.length; i++) {
    //Agregar el elemento actual de arr1 al final del array concatenatedArray
    concatenatedArray[concatenatedArray.length] = arr1[i];
  }
  //iterar a través de cada elemento del segundo array
  for (var j = 0; j < arr2.length; j++) {
    //Agregar el elemento actual de arr2 al final del array concatenatedArray
    concatenatedArray[concatenatedArray.length] = arr2[j];
  }
  //devolver el resultado para que saque los arrays concatenados en un mismo array
  return concatenatedArray;
}

//CASE 1
var arr1 = ["Perico"];
var arr2 = ["De los palotes"];

var arr = concat(arr1, arr2);
console.log(arr);
//OUTPUT ["Perico", "De los palotes"]

//CASE 2
var num = [1];
var arr1 = ["De picas"];

var arr = concat(num, arr1);
console.log(arr);
//OUTPUT [1, "De picas"]

//CASE 3
var arr1 = ["Xavi"];
var arr2 = ["Gonzalez"];

var arr = concat(arr2, arr1);
console.log(arr);
//OUTPUT ["Gonzalez", "Xavi"]

//var separator = " ";

//SOLUCION DEFINITIVA
delete Array.prototype.concat;
function concat(arr1, arr2) {
  // TODO implement
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    newArray[newArray.length] = arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    newArray[newArray.length] = arr2[j];
  }
  return newArray;
}

//CASE 1
var arr1 = ["Perico"];
var arr2 = ["De los palotes"];

var arr = concat(arr1, arr2);
console.log(arr);
//OUTPUT "Perico De los palotes"

//CASE 2
var num = [1];
var arr1 = ["De picas"];

var arr = concat(num, arr1);
console.log(arr);
//OUTPUT "1 De picas"

//CASE 3
var arr1 = ["Xavi"];
var arr2 = ["Gonzalez"];

var arr = concat(arr2, arr1);
console.log(arr);
//OUTPUT "Gonzalez 8 Xavi"

//CASE 4
var arr1 = [1, 5, 8];
var arr2 = ["j", "h", "l", "r"];

var arr = concat(arr1, arr2);
console.log(arr);
// [1,5,8,"j","h","l","r"]

//SOLUCION ALTERNATIVA CUANDO QUIERES CONCATENAR + DE 2 ARRAYS
function concat(arr1, arr2) {
  // TODO implement
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    var element = arr1[i];

    newArray[i] = element;
  }
  for (var j = 0; j < arr2.length; j++) {
    var element = arr2[j];

    newArray[newArray.length] = element;
  }
  return newArray;
}

//CASE 1
var nums = [1, 5, 63, 89, 90];
var animals = ["cows", "goats", "ships"];
var fruits = ["oranges", "apples", "lemons", "bananas"];
var cars = ["lambo", "ferrari", "mercedes", "seat"];

var result = concat(nums, animals, fruits, cars);
console.log(result);

// [1, 5, 63, 89, 90, "cows", "goats", "ships", "oranges", "apples", "lemons", "bananas", "lambo", "ferrari", "mercedes", "seat"]
