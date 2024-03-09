delete String.prototype.trim;

function trim(string) {
  var startIndex = 0;

  for (var i = startIndex; i < string.length; i++) {
    var char = string[i];

    if (char !== " " && char !== "\t" && char !== "\n" && char !== "\r") {
      startIndex = i;

      break;
    }
  }

  var endIndex = string.length - 1;

  for (var i = endIndex; i > -1; i--) {
    var char = string[i];

    if (char !== " " && char !== "\t" && char !== "\n" && char !== "\r") {
      endIndex = i;

      break;
    }
  }

  var trimed = "";

  for (var i = startIndex; i < endIndex + 1; i++) {
    var char = string[i];

    trimed += char;
  }

  return trimed;
}

console.log("CASE 1");

var greeting = "   Hello, World!   ";

var trimed = trim(greeting);

console.log(">" + trimed + "<");
// '>Hello, World!<'

console.log("CASE 2");

var greeting = " \n\t\r hola mundo \n\t\r ";

var trimed = trim(greeting);

console.log(">" + trimed + "<");
// '>hola mundo<'


