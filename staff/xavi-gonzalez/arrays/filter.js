//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

delete Array.prototype.filter

function filter(array, callback) {
    //TODO implement me
    var newArray = []
    
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray
}
   

//CASE 1
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

var result = filter(words, function (x) {return x.length > 6 })
//console.log(result);
// Expected output: ["exuberant", "destruction", "present"]


//ASSERTS

console.assert(result[0] = "exuberant" )
console.assert(result[1] ="destruction") 
console.assert(result[2] ="present")
//"exuberant", "destruction", "present"

console.assert(words.length === 5, '5')
// [5]


//FUNCIONES PARA ASSERTS
var expectedResult = ['spray', 'elite', 'exuberant', 'destruction', 'present']

for (let i = 0; i < words.length; i++) {
  console.assert(words[i] === expectedResult[i], expectedResult[i])
}
console.assert(words.length === expectedResult.length, expectedResult.length)






//CASE 2
var nums = [25, 98, 65, 96, 35];

var result = filter(nums, function (x) {return x > 30 })
//console.log(result);
// Expected output: [98, 65, 96, 35]


//ASSERTS

console.assert(result[0] = 98 )
console.assert(result[1] = 65) 
console.assert(result[2] = 96)
console.assert(result[3] = 35)
//[98, 65, 96, 35]


console.assert(nums[0] === 25, '25')
console.assert(nums[1] === 98, '98')
console.assert(nums[2] === 65, '65')
console.assert(nums[3] === 96, '96')
console.assert(nums[4] === 35, '35')

//[25, 98, 64, 96, 35];


console.assert(nums.length === 5, '5')
// [5]


//FUNCIONES PARA ASSERTS
var expectedResult = [25, 98, 65, 96, 35];

for (let i = 0; i < nums.length; i++) {
  console.assert(nums[i] === expectedResult[i], expectedResult[i])
}
console.assert(nums.length === expectedResult.length, expectedResult.length)