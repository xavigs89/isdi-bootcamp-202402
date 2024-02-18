//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

delete Array.prototype.push;
function push(array, ...elements) {
    //TODO implement me

    if (elements.length > 0)
    array[array.length] = elements [0]

    return array.length
}
 

  //CASE 1
  {
    const nums = [100, 200, 300, 400, 500];
    const length = push(nums, 600);
    
    console.log(length);
    //OUTPUT 6
    console.log(nums);
    //OUTPUT [100, 200, 300, 400, 500, 600]
  }
  
  //CASE 2
  {
    const animals = ["pigs", "goats", "sheep"];
    const length = push(animals, "cows");
    
    console.log(length);
    //OUTPUT 4
    console.log(animals);
    //OUTPUT ["pigs", "goats", "sheep", "cows"]
  }
  
  //CASE 3
  {
    const sports = ["soccer", "baseball"];
    const length = push(sports);
    
    console.log(length);
    //OUTPUT 2
    console.log(sports);
    //OUTPUT ["soccer", "baseball"]
  }
  
  //CASE 4
  {
    const sports = ["soccer", "baseball"];
    const length = push(sports, undefined);
    
    console.log(length);
    //OUTPUT 3
    console.log(sports);
    //OUTPUT ["soccer", "baseball", undefined]
  }

  

  //si abres llaves en bloques, los const se quedan sin modificar