/**
 * Extracts an element that matches the condition from an iterable object.
 *
 * @param object - The iterable object to mutate.
 * @param index - The index from which to extract a value.
 *
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
debugger;
function extract(object, callback) {

  if (object instanceof Object) {
 
  var extractedItem = {};
  debugger;

  for (var i = 0; i < object.length; i++) {
    if (callback(object[i]) === true) {
      extractedItem = object[i];

      for (var j = i; j < object.length; j++) {
        object[j] = object[j + 1];
      }

      object.length--;
      delete object[object.length];
    }
  }
  return extractedItem;

} else{
        throw TypeError (object + ' is not an object') // si no error
    }

}


console.log("CASE 1: extract user pepito form users");

var users = {
  0: { name: "Wendy", age: 19 },
  1: { name: "Peter", age: 20 },
  2: { name: "Pepito", age: 50 },
  3: { name: "Campa", age: 30 },
  4: { name: "James", age: 40 },
  length: 5,
};

var user = extract(users, function (user) {
  return user.name === "Pepito";
});

console.log(user);
// { name: 'Pepito', age: 50 }

console.log(users);
/*
{
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Campa', age: 30 },
    3: { name: 'James', age: 40 },
    length: 4
}
*/


console.log('CASE 2: number is not an object')

try {
    extract(5)
} catch (error) {
    console.log(error)
    // TypeError: 5 is not an Object
}
