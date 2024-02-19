//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
delete Array.prototype.slice

function slice(array, start, end) {
    //TODO implement me

    
}





//CASE 1
var array = [1, 2, 3, 4, 5];
var result = array.slice(1, 4);
console.log(result); 
// Output: [2, 3, 4]