delete Array.prototype.forEach;

function forEach(array, callback) {
    //TODO implement me
for (var i = 0; i < array.length;i++) {
    var element = array[i]
    callback(element, i)
}
}


console.log('CASE 1')

var nums = [10,20,30,40,50]
    forEach(nums, function (num) {
        console.log(num)
    })
/*  10
    20
    30
    40
    50
*/

console.log('CASE 2');

var nums = [10,20,30,40,50]
var sum = 0

forEach(nums, function, (num,index){
    console.log(sum)
})



