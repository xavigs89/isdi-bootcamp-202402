function Arroz() {
  if (arguments.length !== 1) {
    this.length = arguments.length;

    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments[i];

      this[i] = argument;
    }
  } else {
    var argument = arguments[0];

    if (typeof argument === "number") {
      this.length = argument;

      return;
    }

    this[0] = argument;
    this.length = 1;
  }
}

Arroz.prototype.push = function () {
  for (var i = 0; i < arguments.length; i++) {
    var argument = arguments[i];

    this[this.length] = argument;
    this.length++;
  }

  return this.length;
};

Arroz.prototype.pop = function () {
  var lastIndex = this.length - 1;

  var last = this[lastIndex];

  delete this[lastIndex];

  this.length--;

  return last;
};

Arroz.prototype.toString = function () {
  var string = "Arroz [";

  for (var i = 0; i < this.length; i++) {
    var element = this[i];

    string += element;

    if (i < this.length - 1) string += ", ";
  }

  string += "]";

  return string;
};

Arroz.prototype.shift = function () {
  var firstIndex = 0;

  var first = this[firstIndex];

  delete this[firstIndex];

  this.length--;

  return first;
};

Arroz.prototype.at = function (index) {
  if (index < -1) {
    index = index + this.length;
  }
  return this[index];
};

Arroz.prototype.find = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i];
    var matches = callback(element, i, this);
    if (matches) return element;
    //if (callback(element) === true) {
    //if (callback(this[i]) === true) {
    //return this[i];
  }
};
//return undefined;
//};

Arroz.prototype.filter = function (callback) {
  var newArroz = new Arroz();

  for (var i = 0; i < this.length; i++) {
    var element = this[i];
    if (callback(element) === true) {
      //if (callback(this[i]) === true) {
      newArroz[newArroz.length] = this[i];
      newArroz.length++;
    }
  }
  return newArroz;
};

Arroz.prototype.concat = function () {
  var concatenatedArroz = new Arroz();

  for (var i = 0; i < this.length; i++) {
    concatenatedArroz[concatenatedArroz.length] = this[i];
    concatenatedArroz.length++;
  }
  for (var i = 0; i < arguments.length; i++) {
    var elem = arguments[i];
    if (elem instanceof Arroz) {
      for (var j = 0; j < elem.length; j++) {
        concatenatedArroz[concatenatedArroz.length] = elem[j];

        concatenatedArroz.length++;
      }
    } else {
      concatenatedArroz[concatenatedArroz.length] = elem[i];
      concatenatedArroz.length++;
    }
  }
  return concatenatedArroz;
};

Arroz.prototype.indexOf = function (searchElement) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

Arroz.prototype.lastIndexOf = function (searchElement, index) {
  if (index >= this.length) {
    return -1;
  } else if ((index < 0 && this.length + index < 0) || index === undefined) {
    for (var i = this.length - 1; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
  } else if (index < 0 && this.length + index > 0) {
    for (var i = this.length + index; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
  } else {
    for (var i = index; i >= 0; i--) {
      if (searchElement === this[i]) {
        return i;
      }
    }
  }
  return -1;
};

Arroz.prototype.map = function (callback) {
  var mapArroz = new Arroz();

  for (var i = 0; i < this.length; i++) {
    var element = this[i];
    var mapElement = callback(element, i, this);
    mapArroz[mapArroz.length++] = mapElement;
    //mapArroz[i] = callback(this[i], i, this);
    // if (callback(this[i]) === true) {
    //mapArroz[mapArroz.length] = this[i]
  }
  return mapArroz;
};

Arroz.prototype.every = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i];
    if (callback(element) === false) {
      //if (callback(this[i]) === false) {
      return false;
    }
  }
  return true;
};

Arroz.prototype.some = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i];
    if (callback(element) === true) {
      //if (callback(this[i]) === true) {
      return true;
    }
  }
  return false;
};

Arroz.prototype.unshift = function () {
  var length = arguments.length + this.length;
  for (var i = length - 1; i > -1; i--) {
    this[i] = this[i - arguments.length];
  }
  for (var i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  return (this.length = length);
};

Arroz.prototype.with = function (index, value) {
  var newArroz = new Arroz();

  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    if (i === index) {
      newArroz[newArroz.length] = value;
      newArroz.length++;
    } else {
      newArroz[newArroz.length] = elem;
      newArroz.length++;
    }
  }
  return newArroz;
};

/*
Arroz.prototype.forEach = function (callback) {

}
*/

Arroz.from = function (arroz) {
  var newArroz = new Arroz();

  for (var i = 0; i < arroz.length; i++) {
    var elem = arroz[i];

    newArroz[newArroz.length++] = elem;
  }

  return newArroz;
};

Arroz.prototype.findIndex = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i];
    if (callback(element) === true) {
      //var matches = callback(element, i, this)
      //if (matches)
      return i;
      //if (callback(element) === true) {
      //if (callback(this[i]) === true) {
      //return this[i];
    }
  }
  return undefined;
};

Arroz.prototype.includes = function (callback) {
  for (var i = 0; i < this.length; i++) {
      var element = this[i]
      if (element !== undefined) {
          if (callback(element) === true)
              return true
      }
  }
  return false
}

Arroz.prototype.join = function (separator) {
var returnedString = ''
if (arguments.length < 1) {
    separator = ',';
} else {
    separator = separator;
}
//en ternario: separator = arguments.length < 1 ? ',' : separator
for (var i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
        returnedString += this[i]
        return returnedString
    }
    returnedString += this[i] + separator
}
}


Arroz.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
      var element = this[i]
      callback(element, i, this)
  }
}


Arroz.prototype.reduce = function (callback, initialValue) {

  var accumulator = initialValue;
  if (initialValue === undefined) {
      accumulator = 0
      for (var i = 0; i < this.length; i++) {

          var elem = this[i];
          accumulator = callback(accumulator, elem);

      }
  } else {
      for (var i = 0; i < this.length; i++) {

          var elem = this[i];
          accumulator = callback(accumulator, elem);
      }
  }
  return accumulator
}



module.exports = Arroz;
