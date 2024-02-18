//El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

delete String.prototype.split;

function split(string, separator) {
  // TODO implement me
    let result = [];
    let currentValue = "";
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== separator) {
        currentValue = currentValue + string[i];
      } else {
        result[result.length] = currentValue;
        currentValue = "";
      }
    }
    result[result.length] = currentValue;
    return result;
  }

// CASE 1

var s = "hola mundo";

var words = split(s, " ");

console.log(words);
// ['hola', 'mundo']

