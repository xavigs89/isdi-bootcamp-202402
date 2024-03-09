var matcha = require("./matcha");

var Arroz = require("./Arroz");

matcha.describe("Arroz", function () {
  matcha.describe("> constructor", function () {
    matcha.it("should construct", function () {
      var a = new Arroz();

      matcha.expect(a).toBeInstanceOf(Arroz);
      matcha.expect(a.length).toBe(0);
    });

    matcha.it("should construct with multiple values", function () {
      var a = new Arroz(10, 20, 30);

      matcha.expect(a).toBeInstanceOf(Arroz);
      matcha.expect(a.length).toBe(3);
      matcha.expect(a[0]).toBe(10);
      matcha.expect(a[1]).toBe(20);
      matcha.expect(a[2]).toBe(30);
    });

    matcha.it("should construct with one non-numeric value", function () {
      var a = new Arroz(true);

      matcha.expect(a).toBeInstanceOf(Arroz);
      matcha.expect(a.length).toBe(1);
      matcha.expect(a[0]).toBe(true);
    });

    matcha.it("should construct with one numeric value", function () {
      var a = new Arroz(5);

      matcha.expect(a).toBeInstanceOf(Arroz);
      matcha.expect(a.length).toBe(5);
      for (var i = 0; i < a.length; i++) matcha.expect(a[i]).toBe(undefined);
    });
  });
  matcha.describe("> push", function () {
    matcha.it("should push a value", function () {
      var a = new Arroz(10, 20, 30);

      matcha.expect(!!a.push).toBe(true);

      var length = a.push(40);

      matcha.expect(a.length).toBe(4);
      matcha.expect(a[a.length - 1]).toBe(40);
      matcha.expect(length).toBe(4);
    });

    matcha.it("should push many values", function () {
      var a = new Arroz(10, 20, 30);

      matcha.expect(!!a.push).toBe(true);

      var length = a.push(40, 50, 60, 70);

      matcha.expect(a.length).toBe(7);
      matcha.expect(a[3]).toBe(40);
      matcha.expect(a[4]).toBe(50);
      matcha.expect(a[5]).toBe(60);
      matcha.expect(a[6]).toBe(70);
      matcha.expect(length).toBe(7);
    });
  });

  matcha.describe("> pop", function () {
    matcha.it("should extract last value", function () {
      var a = new Arroz(10, 20, 30);

      matcha.expect(!!a.pop).toBe(true);

      var value = a.pop();

      matcha.expect(a.length).toBe(2);
      matcha.expect(a[0]).toBe(10);
      matcha.expect(a[1]).toBe(20);
      matcha.expect(a[2]).toBe(undefined);
      matcha.expect(value).toBe(30);
    });
  });

  matcha.describe("> toString", function () {
    matcha.it("should convert to string", function () {
      var a = new Arroz(10, 20, 30, 40, 50);

      matcha.expect(!!a.toString).toBe(true);

      var string = a.toString();

      matcha.expect(string).toBe("Arroz [10, 20, 30, 40, 50]");
    });
  });

  matcha.describe("> shift", function () {
    matcha.it("should delete first element", function () {
      var a = new Arroz(10, 20, 30, 40, 50);

      matcha.expect(!!a.shift).toBe(true);

      var first = a.shift();

      matcha.expect(a.length).toBe(4);
      matcha.expect(a[0]).toBe(undefined);
      matcha.expect(a[1]).toBe(20);
      matcha.expect(a[2]).toBe(30);
      matcha.expect(a[3]).toBe(40);
      matcha.expect(a[4]).toBe(50);
      matcha.expect(first).toBe(10);
    });
  });

  matcha.describe("> at", function () {
    matcha.it(
      "should return the value indicated in positive index",
      function () {
        var a = new Arroz(10, 20, 30, 40, 50);

        matcha.expect(!!a.at).toBe(true);

        var atValuePositive = a.at(3);

        matcha.expect(atValuePositive).toBe(40);
        matcha.expect(a[0]).toBe(10);
        matcha.expect(a[1]).toBe(20);
        matcha.expect(a[2]).toBe(30);
        matcha.expect(a[3]).toBe(40);
        matcha.expect(a[4]).toBe(50);
        matcha.expect(a[5]).toBe(undefined);
      }
    );

    matcha.it(
      "should return the value indicated in negative index",
      function () {
        var a = new Arroz(10, 20, 30, 40, 50);

        matcha.expect(!!a.at).toBe(true);

        var atValueNegative = a.at(-3);

        matcha.expect(atValueNegative).toBe(30);
        matcha.expect(a[0]).toBe(10);
        matcha.expect(a[1]).toBe(20);
        matcha.expect(a[2]).toBe(30);
        matcha.expect(a[3]).toBe(40);
        matcha.expect(a[4]).toBe(50);
        matcha.expect(a[5]).toBe(undefined);
      }
    );
  });

  matcha.describe("> find", function () {
    matcha.it("should return first element that matches with callback", function () {
      var a = new Arroz(6, 12, 32, 98, 8);

      matcha.expect(!!a.find).toBe(true);

      var result = a.find(function (element) {
        return element > 30;
      });

      matcha.expect(result).toBe(32);

      matcha.expect(a[0]).toBe(6);
      matcha.expect(a[1]).toBe(12);
      matcha.expect(a[2]).toBe(32);
      matcha.expect(a[3]).toBe(98);
      matcha.expect(a[4]).toBe(8);
      matcha.expect(a.length).toBe(5);
    });
  });

  matcha.describe("> filter", function () {
    matcha.it("should return values with more than 6 letters", function () {
      var a = new Arroz("seat", "ferrari", "bmw", "mercedes", "lamborghini");

      matcha.expect(!!a.filter).toBe(true);

      var result = a.filter(function (word) {
        return word.length > 6;
      });

      matcha.expect(result.length).toBe(3);
      //matcha.expect(result).toBe('ferrari,mercedes,lamborghini')

      matcha.expect(result[0]).toBe("ferrari");
      matcha.expect(result[1]).toBe("mercedes");
      matcha.expect(result[2]).toBe("lamborghini");

      matcha.expect(a[0]).toBe("seat");
      matcha.expect(a[1]).toBe("ferrari");
      matcha.expect(a[2]).toBe("bmw");
      matcha.expect(a[3]).toBe("mercedes");
      matcha.expect(a[4]).toBe("lamborghini");
      matcha.expect(a.length).toBe(5);
    });
  });

  matcha.describe("> concat", function () {
    matcha.it("should return an array with concatenated values", function () {
      var a = new Arroz(100, 200, 300);
      var b = new Arroz("apple", "banana", "orange");

      matcha.expect(!!a.concat).toBe(true);

      var result = a.concat(b);

      matcha.expect(a.length).toBe(3);
      matcha.expect(b.length).toBe(3);

      matcha.expect(result.length).toBe(6);

      matcha.expect(result[0]).toBe(100);
      matcha.expect(result[1]).toBe(200);
      matcha.expect(result[2]).toBe(300);
      matcha.expect(result[3]).toBe("apple");
      matcha.expect(result[4]).toBe("banana");
      matcha.expect(result[5]).toBe("orange")

    //   matcha.expect(a[0]).toBe(100);
    //   matcha.expect(a[1]).toBe(200);
    //   matcha.expect(a[2]).toBe(300);
    //   matcha.expect(b[0]).toBe("apple");
    //   matcha.expect(b[1]).toBe("banana");
    //   matcha.expect(b[2]).toBe("orange");
    });
  });


  
matcha.describe("> indexOf", function () {
 matcha.it(
   "should return the first index at which an element can be found in the array",
   function () {
     var a = new Arroz(10, 20, 30, 40, 50);

     matcha.expect(!!a.indexOf).toBe(true);

     var result = a.indexOf(30);

     matcha.expect(result).toBe(2);

     matcha.expect(a.length).toBe(5);
     //matcha.expect(result.length).toBe(1)
     matcha.expect(a[0]).toBe(10);
     matcha.expect(a[1]).toBe(20);
     matcha.expect(a[2]).toBe(30);
     matcha.expect(a[3]).toBe(40);
     matcha.expect(a[4]).toBe(50);
   }
 );

 matcha.it(
   "should return -1 if the element cannot be found in the array",
   function () {
     var a = new Arroz(10, 20, 30, 40, 50);

     matcha.expect(!!a.indexOf).toBe(true);

     var result = a.indexOf(97);

     matcha.expect(result).toBe(-1);

     matcha.expect(a.length).toBe(5);
     matcha.expect(result.length).toBe(undefined);
     matcha.expect(a[0]).toBe(10);
     matcha.expect(a[1]).toBe(20);
     matcha.expect(a[2]).toBe(30);
     matcha.expect(a[3]).toBe(40);
     matcha.expect(a[4]).toBe(50);
   }
 );
    /*
        matcha.it('should return many elements found in the array', function () {
            var a = new Arroz('a', 'b', 'c', 'a', 'a', 'd', 'a')

            matcha.expect(!!a.indexOf).toBe(true)

            var result = a.indexOf('a')

            matcha.expect(result).toBe(0, 3, 4, 6)

            matcha.expect(a.length).toBe(7)
            matcha.expect(result.length).toBe(4)
            matcha.expect(a[0]).toBe('a')
            matcha.expect(a[1]).toBe('b')
            matcha.expect(a[2]).toBe('c')
            matcha.expect(a[3]).toBe('a')
            matcha.expect(a[4]).toBe('a')
            matcha.expect(a[5]).toBe('d')
            matcha.expect(a[6]).toBe('a')
        })
        */
    })
    matcha.describe("> lastIndexOf", function () {
      matcha.it(
        "should return the last index at which an element can be found in the array",
        function () {
          var a = new Arroz("bmw", "ferrari", "bmw", "mercedes", "lamborghini");

          matcha.expect(!!a.lastIndexOf).toBe(true);

          var result = a.lastIndexOf("bmw");

          matcha.expect(result).toBe(2);
          matcha.expect(a.length).toBe(5);

          matcha.expect(a[0]).toBe("bmw");
          matcha.expect(a[1]).toBe("ferrari");
          matcha.expect(a[2]).toBe("bmw");
          matcha.expect(a[3]).toBe("mercedes");
          matcha.expect(a[4]).toBe("lamborghini");
        }
      );

      matcha.it(
        "should return -1 if the element is not present in the array",
        function () {
          var a = new Arroz(10, 20, 30, 40, 50);

          matcha.expect(!!a.lastIndexOf).toBe(true);

          var result = a.lastIndexOf(80);

          matcha.expect(result).toBe(-1);
          matcha.expect(a.length).toBe(5);

          matcha.expect(a[0]).toBe(10);
          matcha.expect(a[1]).toBe(20);
          matcha.expect(a[2]).toBe(30);
          matcha.expect(a[3]).toBe(40);
          matcha.expect(a[4]).toBe(50);
        }
      );

      matcha.it(
        "should return the last index at which an element can be found in the array when we search by position",
        function () {
          var a = new Arroz(10, 20, 30, 40, 50, 10);

          matcha.expect(!!a.lastIndexOf).toBe(true);

          var resultA = a.lastIndexOf(10);
          var resultB = a.lastIndexOf(10, -1);
          var resultC = a.lastIndexOf(10, -4);

          matcha.expect(resultA).toBe(5);
          matcha.expect(resultB).toBe(5);
          matcha.expect(resultC).toBe(0);
          matcha.expect(a.length).toBe(6);

          matcha.expect(a[0]).toBe(10);
          matcha.expect(a[1]).toBe(20);
          matcha.expect(a[2]).toBe(30);
          matcha.expect(a[3]).toBe(40);
          matcha.expect(a[4]).toBe(50);
          matcha.expect(a[5]).toBe(10);
        }
      );
    });


  matcha.describe("> map", function () {
    matcha.it("should return nums values * 2", function () {
      var a = new Arroz(10, 20, 30, 40, 50);

      matcha.expect(!!a.map).toBe(true);

      var result = a.map(function (x) {
        return x * 2;
      });

      matcha.expect(result[0]).toBe(20);
      matcha.expect(result[1]).toBe(40);
      matcha.expect(result[2]).toBe(60);
      matcha.expect(result[3]).toBe(80);
      matcha.expect(result[4]).toBe(100);

      matcha.expect(a[0]).toBe(10);
      matcha.expect(a[1]).toBe(20);
      matcha.expect(a[2]).toBe(30);
      matcha.expect(a[3]).toBe(40);
      matcha.expect(a[4]).toBe(50);
    });
  });

  matcha.describe("> every", function () {
    matcha.it(
      "should return true if all elements matches with the callback",
      function () {
        var a = new Arroz(10, 40, 60, 70, 98);

        matcha.expect(!!a.every).toBe(true);

        var result = a.every(function (x) {
          return x < 100;
        });

        matcha.expect(result).toBe(true);

        matcha.expect(a[0]).toBe(10);
        matcha.expect(a[1]).toBe(40);
        matcha.expect(a[2]).toBe(60);
        matcha.expect(a[3]).toBe(70);
        matcha.expect(a[4]).toBe(98);
        matcha.expect(a.length).toBe(5);
      }
    );

    matcha.it(
      "should return false if all elements do not match with the callback",
      function () {
        var a = new Arroz(10, 40, 60, 70, 98);

        matcha.expect(!!a.every).toBe(true);

        var result = a.every(function (x) {
          return x > 50;
        });

        matcha.expect(result).toBe(false);

        matcha.expect(a[0]).toBe(10);
        matcha.expect(a[1]).toBe(40);
        matcha.expect(a[2]).toBe(60);
        matcha.expect(a[3]).toBe(70);
        matcha.expect(a[4]).toBe(98);
        matcha.expect(a.length).toBe(5);
      }
    );
  });

  matcha.describe("> some", function () {
    matcha.it(
      "should return true if at least 1 element matches with the callback",
      function () {
        var a = new Arroz(10, 20, 30, 40, 50);

        matcha.expect(!!a.some).toBe(true);

        var result1 = a.some(function (element) {
          return element > 30;
        });

        var result2 = a.some(function (element) {
          return element > 70;
        });

        matcha.expect(result1).toBe(true);
        matcha.expect(result2).toBe(false);

        matcha.expect(a[0]).toBe(10);
        matcha.expect(a[1]).toBe(20);
        matcha.expect(a[2]).toBe(30);
        matcha.expect(a[3]).toBe(40);
        matcha.expect(a[4]).toBe(50);
        matcha.expect(a.length).toBe(5);
      }
    );
  });

  matcha.describe("> unshift", function () {
    matcha.it(
      "should add the element to the beggining of the array",
      function () {
        var a = new Arroz(10, 20, 30);

        matcha.expect(!!a.unshift).toBe(true);

        var value = a.unshift(40, 50);

        matcha.expect(a.length).toBe(5);
        matcha.expect(a[0]).toBe(40);
        matcha.expect(a[1]).toBe(50);
        matcha.expect(a[2]).toBe(10);
        matcha.expect(a[3]).toBe(20);
        matcha.expect(a[4]).toBe(30);
      }
    );
  });

  matcha.describe("> with", function () {
    matcha.it(
      "should return",
      function () {
        var a = new Arroz(10, 20, 30, 40, 50);

        matcha.expect(!!a.with).toBe(true);

        var result = a.with(2, 35);

        matcha.expect(a.length).toBe(5);
        matcha.expect(result[0]).toBe(10);
        matcha.expect(result[1]).toBe(20);
        matcha.expect(result[2]).toBe(35);
        matcha.expect(result[3]).toBe(40);
        matcha.expect(result[4]).toBe(50);
      }
    );
  });
/*
matcha.describe("> forEach", function () {
  matcha.it("should iterate on each element", function (){

    var a = new Arroz(10, 20, 30, 40, 50);

        matcha.expect(!!a.forEach).toBe(true);

        var result = a.forEach(2, 35);

        matcha.expect(a.length).toBe(5);
        matcha.expect(result[0]).toBe(10);
        matcha.expect(result[1]).toBe(20);
        matcha.expect(result[2]).toBe(35);
        matcha.expect(result[3]).toBe(40);
        matcha.expect(result[4]).toBe(50);
      
    /*
    var a = new Arroz (10, 20, 30, 40, 50, 60)
    var b = new Arroz

    matcha.expect(!!a.forEach).toBe(true);
    
  })
})
*/

matcha.describe("> from", function () {
  matcha.it("should create an instance of Arroz from numbers", function (){
    var nums = new Arroz(10, 20, 30)
    var nums2 = Arroz.from(nums)

    matcha.expect(nums.length).toBe(3)

    for (var i = 0; i < nums.length; i++) {
        matcha.expect(nums[i]).toBe(10 * (i + 1))
    }

    matcha.expect(nums === nums2).toBe(false)
    // N2H
    //matcha.expect(nums).not.toBe(nums2) 

    matcha.expect(nums2.length).toBe(nums.length)

    for (var i = 0; i < nums2.length; i++) {
        matcha.expect(nums2[i]).toBe(10 * (i + 1))
    }
})
})

matcha.describe("> findIndex", function () {
  matcha.it("should return the index of the first element in an array that matches with callback.", function () {
    var a = new Arroz(10, 20, 30, 40, 50);

    matcha.expect(!!a.findIndex).toBe(true)

    var result = a.findIndex(function (x) {
      return x > 35;
    });

    matcha.expect(result).toBe(3);

    matcha.expect(a[0]).toBe(10);
    matcha.expect(a[1]).toBe(20);
    matcha.expect(a[2]).toBe(30);
    matcha.expect(a[3]).toBe(40);
    matcha.expect(a[4]).toBe(50);
    matcha.expect(a.length).toBe(5);
  });
});


matcha.describe("> includes", function () {
  matcha.it("should return true if at least 1 element meets condition", function () {
    var a = new Arroz(10, 20, 30, 40, 50);

    matcha.expect(!!a.includes).toBe(true)

    var result = a.includes(function (x) {
      return x < 30;
    });

    matcha.expect(result).toBe(true);

    matcha.expect(a[0]).toBe(10);
    matcha.expect(a[1]).toBe(20);
    matcha.expect(a[2]).toBe(30);
    matcha.expect(a[3]).toBe(40);
    matcha.expect(a[4]).toBe(50);
    matcha.expect(a.length).toBe(5);
  });

  matcha.it("should return false if no one meets condition", function () {
    var a = new Arroz(10, 20, 30, 40, 50);

    matcha.expect(!!a.includes).toBe(true)

    var result = a.includes(function (x) {
      return x < 10;
    });

    matcha.expect(result).toBe(false);

    matcha.expect(a[0]).toBe(10);
    matcha.expect(a[1]).toBe(20);
    matcha.expect(a[2]).toBe(30);
    matcha.expect(a[3]).toBe(40);
    matcha.expect(a[4]).toBe(50);
    matcha.expect(a.length).toBe(5);
  });
});

matcha.describe("> join", function () {
  matcha.it("should return a string of concatenation of all elements in array, separated by separator(if no separator, by default is ,)", function () {
    var a = new Arroz('Fire', 'Air', 'Water');

    matcha.expect(!!a.join).toBe(true)

    var result = a.join ()
    matcha.expect(result).toBe('Fire,Air,Water');

    result = a.join('')
    matcha.expect(result).toBe('FireAirWater')

    var a = new Arroz('Fire', 'Air', 'Water')

    result = a.join('-')
    matcha.expect(result).toBe('Fire-Air-Water')

    matcha.expect(a[0]).toBe('Fire');
    matcha.expect(a[1]).toBe('Air');
    matcha.expect(a[2]).toBe('Water');
    matcha.expect(a.length).toBe(3);
  });
});


matcha.describe('> forEach', function () {
  matcha.it('should execute callback function in all elements of Arroz', function () {
      var a = new Arroz(10, 20, 30, 40, 50, 60)
      var b = new Arroz

      matcha.expect(!!a.forEach).toBe(true)

      a.forEach(function (element, index, arroz) {
          b[index] = { item: element, iterable: arroz }
          b.length++
      })

      matcha.expect(a.length).toBe(6)

      for (var i = 0; i < a.length; i++) {
          matcha.expect(a[i]).toBe(10 * (i + 1))
      }

      matcha.expect(b.length).toBe(a.length)

      for (var i = 0; i < b.length; i++) {
          var element = b[i]

          matcha.expect(element.item).toBe(10 * (i + 1))
          matcha.expect(element.iterable).toBe(a)
      }
  })
})


matcha.describe('> reduce', function () {
  matcha.it('should return a single value of all values operated across all elements', function () {
      var a = new Arroz(10, 20, 30, 40)

      matcha.expect(!!a.reduce).toBe(true)

      var result = a.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue
      })

      matcha.expect(result).toBe(100)
  })
})

})




//If no elements satisfy the testing function, -1 is returned.