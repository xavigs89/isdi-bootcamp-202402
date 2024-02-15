delete Array.prototype.from;
// El método from() crea una nueva instancia de Array a partir de un objeto iterable.

delete Array.prototype.from;

function from(string, mapForm) {
  debugger;
  newArray = [];
  for (var i = 0; i < string.length; i++) {
    newArray[newArray.length] = newArray + string[i];
  }
  return newArray;
}

console.log(from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
