delete String.prototype.slice;

function slice(string, indexStart, indexEnd) {
  // TODO implement me
  var newString = "";
  if (indexStart >= 0) {
    for (var i = indexStart; i < indexEnd; i++) {
      var newString = newString + string[i];
    }
  } else {
    for (var i = string.length + indexStart; i < string.length; i++) {
      var newString = newString + string[i];
    }
  }

  return newString;
}

// CASE 1

var s = "hola mundo";

var piece = slice(s, 5, 8);

console.log(piece);
// 'mun'

// CASE 2

var s = "hola mundo";

var piece = slice(s, -3);

console.log(piece);
// 'ndo'
