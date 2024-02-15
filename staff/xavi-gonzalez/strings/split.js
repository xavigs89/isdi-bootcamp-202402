//El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

delete String.prototype.split;

function split(string, separator) {
  // TODO implement me
  var newArray = []; //array que guarda las palabras divididas del string
  var word = ""; //una variable temporal que guarda cada palabra a medida que avanza
  var count = 0; //contador que llevará el seguimiento del número de palabras encontradas

  for (var i = 0; i < string.length; i++) {
    if (string[i] === separator) {
      word = newArray[newArray.length];
      var word = "";
    }
  }
}

// CASE 1

var s = "hola mundo";

var words = split(s, " ");

console.log(words);
// ['hola', 'mundo']
