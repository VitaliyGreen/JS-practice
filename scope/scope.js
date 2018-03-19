function makeBuffer() {
  var currentBuff = '';

  function buffer(val) {
    if (arguments.length == 0) {
      return currentBuff;
    }

    currentBuff += String(val);
  }

  buffer.clear = function () {
    currentBuff = '';
  };

  return buffer;
}

function byField(field) {
  return function (obj1, obj2) {
    return obj1[field] > obj2[field] ? 1 : -1;
  };
}

function filter(arr, func) {
  var currentArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      currentArr.push(arr[i]);
    }
  }

  return currentArr;
}

function inBetween(a, b) {
  return function (x) {
    return a <= x && x <= b;
  };
}

function makeArmy() {
  var shooters = [];
  for (var i = 0; i < 10; i++)(function (i) {
    var shooter = function () {
      console.log(i);
    };

    shooters.push(shooter);
  })(i);

  return shooters;
}

var army = makeArmy();

army[5]();
