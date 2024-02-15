delete String.prototype.lastIndexOf;

function lastIndexOf(string, searchString) {
  debugger;
  // TODO implement me
  var index = ""; // Declarar una variable vacia para almacenar el index
  for (var i = 0; i < string.length; i++) {
    // Verificar si la letra actual coincide con la primera letra de la cadena para buscar
    if (string[i] === searchString[0]) {
      var newString = string[i];
      for (var j = 1; j < searchString.length; j++) {
        newString = newString + string[i + j];
      }
      // Si la nueva cadena coincide con searchString (busqueda), se actualiza el index
      if (newString === searchString) 
      index = i;
    }
  }
  return index;
}

// CASE 1

var s = "hola mundo";

var index = lastIndexOf(s, "o");

console.log(index);
// 9

// CASE 2

var s = "hola mundo";

var index = lastIndexOf(s, "ol");

console.log(index);
// 1



