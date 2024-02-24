/*if (!(object instanceof Object))
      throw new TypeError(object + " is not an Object");
*/
/**
 * Removes an element in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate.
 * @param index - The index from which to remove a value.
 *
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function remove(object, index) {
  // TODO

  if (!(object instanceof Object)) {
    throw new TypeError(object + " is not an Object");
  
  }else if(typeof index !== 'number')  //si index no es número )
  throw new TypeError (index + ' is not a Number')


  var removedItem = object[index];

  for (var i = index; i < object.length; i++) { //i = index (1) índice donde empieza a recorrer
    object[i] = object[i + 1]; // i = 1 --> 'blue' // object[i (1) + index (1)] --> 'green' 
  }

  object.length--;  //elimina la última posición del objeto
  delete object[object.length]; //elimina uno la largada del objeto

  return removedItem;
}



console.log("CASE 1: remove blue from index 1");

var colors = {
  0: "red",
  1: "blue",
  2: "green",
  length: 3,
};

var removed = remove(colors, 1);

console.log(removed);
// 'blue'

console.log(colors);
/*
{
    0: 'red',
    1: 'green',
    length: 2
}
*/

console.log("CASE 2: remove red from index 0");

var colors = {
  0: "red",
  1: "blue",
  2: "green",
  length: 3,
};

var length = remove(colors, 0);

console.log(length);
// 'red'

console.log(colors);
/*
{
    0: 'blue',
    1: 'green',
    length: 2
}
*/

console.log("CASE 3: fails on undefined object parameter");

try {
  remove();
} catch (error) {
  console.log(error);
  // TypeError: undefined is not an Object
}

console.log("CASE 4: fails on 1 as an object parameter");

try {
  remove(1);
} catch (error) {
  console.log(error);
  // TypeError: 1 is not an Object
}

console.log("CASE 5: fails on undefined as index parameter");

var colors = {
  0: "red",
  1: "blue",
  2: "green",
  length: 3,
};

try {
  remove(colors);
} catch (error) {
  console.log(error);
  // TypeError: undefined is not a Number
}




 /*for (var i = object.length -1; i > index; i--) {
    object [i - index] = object [i]  
}


object.length --

delete object [object.length]
*/