delete String.prototype.endsWith;

function endsWith(string, searchString) {
  // TODO implement me
  for (let i = string.length - 1; i>= string.length - searchString.length;i--) {
    for (let j = searchString.length - 1; j >= 0; j--) {
      if (string[i] === searchString[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// CASE 1

var s = "hola mundo";

var result = endsWith(s, "ndo");

console.log(result);
// true

// CASE 2

var s = "hola mundo";

var result = endsWith(s, "dos");

console.log(result);
// false
