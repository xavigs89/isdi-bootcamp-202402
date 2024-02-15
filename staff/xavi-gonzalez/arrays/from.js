// El método from() crea una nueva instancia de Array a partir de un objeto iterable.

delete Array.prototype.from;

function from(element, formula) {
  let newArray = [];

  if (formula === undefined) {
    for (var i = 0; i < element.length; i++) {
      newArray[i] = element[i];
    }
    return newArray;
  } else {
    for (var i = 0; i < element.length; i++) {
      newArray[i] = formula(element[i]);
    }
    return newArray;
  }
}

//CASE 1

var str = "papaya";
var result = from(str);
console.log(result);
//['p', 'a', 'p', 'a', 'y', 'a']

//CASE 2

var arr = [1, 2, 3];
var result = from(arr, (x) => x + 1);
console.log(result);
//[2, 3, 4]

//CASE 3
var result = from(arr, (x) => x + x);
console.log(result);
//[2, 4, 6]
