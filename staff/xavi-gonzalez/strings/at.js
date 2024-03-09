delete String.prototype.at;
//Esta función toma una cadena (string) y un índice (index) y devuelve el carácter en ese índice de la cadena.
function at(string, index) {
  // TODO implement me
  /*Si el índice es menor que 0, estamos tratando de acceder a un índice negativo, por lo que calculamos el índice real restando el valor absoluto de "index" al largo de la cadena.
Luego, devolvemos el carácter en ese índice.
*/
  if (index < 0) {
    return string[string.length - index * -1];
  }
  // Si el índice es mayor o igual a 0, simplemente devolvemos el carácter en ese índice.
  return string[index];
}


// CASE 1

var s = "hola mundo";

var char = at(s, 6);
console.log(char);
// 'u'

// CASE 2

var s = "hola mundo";

var char = at(s, 20);
console.log(char);
// undefined

// CASE 3

var s = "hola mundo";

var char = at(s, -4);
console.log(char);
// 'u'
