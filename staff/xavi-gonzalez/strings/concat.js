delete String.prototype.concat;
//var separator = " ";
function concat(str1, str2, separator) {
  // TODO implement me
  var newStr = str1 + separator + str2;
  return newStr;
  //return `${str1}${separator}${str2}`;
}

//CASE 1
var str1 = "Perico";
var str2 = "De los palotes";

var str = concat(str1, str2, " ");
console.log(str);
//OUTPUT "Perico De los palotes"

//CASE 2
var num = 1;
var str1 = "De picas";

var str = concat(num, str1, " ");
console.log(str);
//OUTPUT "1 De picas"

//CASE 3
var str1 = "Xavi";
var str2 = "Gonzalez";

var str = concat(str2, str1, " 8 ");
console.log(str);
//OUTPUT "Gonzalez 8 Xavi"
