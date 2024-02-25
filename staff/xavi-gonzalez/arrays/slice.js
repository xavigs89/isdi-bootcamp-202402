//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
delete Array.prototype.slice;

function slice(array, start, end) {
  var sliced = [];
  if (arguments.length === 2) {
    if (start > -1) {
      for (var i = start; i < array.length; i++) {
        sliced[sliced.length] = array[i];
      }
    } else {
      for (var i = start + array.length; i < array.length; i++) {
        sliced[sliced.length] = array[i];
      }
    }
  } else if (end > -1) {
    if (start > -1) {
      for (var i = start; i < end; i++) {
        sliced[sliced.length] = array[i];
      }
    } else {
      for (var i = start + array.length; i < end; i++) {
        sliced[sliced.length] = array[i];
      }
    }
  } else if (end < 0) {
    if (start > -1) {
      for (var i = start; i < end + array.length; i++) {
        sliced[sliced.length] = array[i];
      }
    } else {
      for (var i = start + array.length; i < end + array.length; i++) {
        sliced[sliced.length] = array[i];
      }
    }
  }
  return sliced;
}

//CASE 1
var array = [1, 2, 3, 4, 5];
var result = slice(array, 1, 4);
console.log(result);
// Output: [2, 3, 4]
