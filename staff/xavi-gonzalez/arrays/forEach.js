//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

//SOLUCION MANU
delete Array.prototype.forEach;

function forEach(array, callback) {
  var callbackType = typeof callback;

  if (callbackType !== "function" && callbackType!== "object" && callbackType !== "undefined")
  throw new TypeError(callbackType + " " +  callback + " is not a function");

    else if (callbackType === "object" || callbackType === "undefined") 
    throw new TypeError(callbackType + " is not a function");
  
  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    callback(element, i, array);
  }
}



console.log('CASE 1: copy nums [10, 20, 30, 40, 50] into other')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num) {
    other[other.length] = num
})
// 10
// 20
// 30
// 40
// 50

console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)

console.assert(other[0] === nums[0], 0)
console.assert(other[1] === nums[1], 1)
console.assert(other[2] === nums[2], 2)
console.assert(other[3] === nums[3], 3)
console.assert(other[4] === nums[4], 4)
console.assert(other.length === nums.length, 'length')




console.log('CASE 2')

var nums = [10, 20, 30, 40, 50]
var sum = 0
var other = []

forEach(nums, function (num) {
    other = (sum += num)
})

//console.log(other)

//console.log(sum)
// 150

console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)

console.assert(other === 150, 150)



console.log('CASE 3')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num, index) {
    other[other.length] = num + index
})

//console.log(nums)

console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)


console.assert(other[0] === 10, 10)
console.assert(other[1] === 21, 21)
console.assert(other[2] === 32, 32)
console.assert(other[3] === 43, 43)
console.assert(other[4] === 54, 54)
console.assert(other.length === nums.length, 'length')



console.log('CASE 4')

var nums = [10, 20, 30, 40, 50]
var other = []

forEach(nums, function (num, index, array) {
    other[other.length] = (num + index + array.length)
})

//console.log(other)

// 15
// 26
// 37
// 48
// 59


console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)


console.assert(other[0] === 15, 15)
console.assert(other[1] === 26, 26)
console.assert(other[2] === 37, 37)
console.assert(other[3] === 48, 48)
console.assert(other[4] === 59, 59)
console.assert(other.length === nums.length, 'length')




console.log('CASE 5: callback is undefined')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums)
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'undefined is not a function', 'message')
}



/*
console.log('CASE 6: callback is a plain object')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, {})
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === '[object Object] is not a function', 'message')
}



console.log('CASE 7')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, 123)
} catch (error) {
    //console.log(error)
    // TypeError: number 123 is not a function
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === '123 is not a function', 'message')
}



console.log('CASE 8')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, true)
} catch (error) {
    //console.log(error)
    // TypeError: boolean true is not a function
    //console.log(error)
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'true is not a function', 'message')
}



console.log('CASE 9')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, !true)
} catch (error) {
    //console.log(error)
    // TypeError: boolean false is not a function
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'false is not a function', 'message')
}

/*
console.log("CASE 1");

var nums = [10, 20, 30, 40, 50];

forEach(nums, function (num) {
  console.log(num);
});
// 10
// 20
// 30
// 40
// 50


//ASSERT
var other = []

console.assert (other[0] === nums[0], '10')
console.assert (other[1] === nums[1], '20')
console.assert (other[2] === nums[2], '30')
console.assert (other[3] === nums[3], '40')
console.assert (other[4] === nums[4], '50')
console.assert (other.length === nums. length, '5')


console.log("CASE 2");

var nums = [10, 20, 30, 40, 50];
var sum = 0;

forEach(nums, function (num) {
  sum += num;
});

console.log(sum);
// 150

console.log("CASE 3");

var nums = [10, 20, 30, 40, 50];

forEach(nums, function (num, index) {
  console.log(num + index);
});
// 10
// 21
// 32
// 43
// 54

console.log("CASE 4");

var nums = [10, 20, 30, 40, 50];

forEach(nums, function (num, index, array) {
  console.log(num + index + array.length);
});
// 15
// 26
// 37
// 48
// 59

console.log("CASE 5");

var nums = [10, 20, 30, 40, 50];

try {
  forEach(nums);
} catch (error) {
  console.log(error);
  // TypeError: undefined is not a function
}

console.log("CASE 6");

var nums = [10, 20, 30, 40, 50];

try {
  forEach(nums, {});
} catch (error) {
  console.log(error);
  // TypeError: object is not a function
}

console.log("CASE 7");

var nums = [10, 20, 30, 40, 50];

try {
  forEach(nums, 123);
} catch (error) {
  console.log(error);
  // TypeError: number 123 is not a function
}

console.log("CASE 8");

var nums = [10, 20, 30, 40, 50];

try {
  forEach(nums, true);
} catch (error) {
  console.log(error);
  // TypeError: boolean true is not a function
}

console.log("CASE 9");

var nums = [10, 20, 30, 40, 50];

try {
  forEach(nums, !true);
} catch (error) {
  console.log(error);
  // TypeError: boolean false is not a function
}
*/
