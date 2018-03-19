var obj = {
  className: 'open menu',
};

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [vasya, masha, vovochka];

var arr = ['rhbiyf', 'rhbiyf', 'utf', 'rhbiyf', 'k.,k.'];

function addClass(obj, cls) {
  if (clsArray.indexOf(cls) == -1) {
    obj.className += (' ' + cls);
  }

  return obj;
}

function camelize(str) {
  str = str.split('');
  var target = '-';
  var dashIndex = 0;
  while (true) {
    var foundPosition = str.indexOf(target, dashIndex);
    if (foundPosition == -1) break;

    str.splice(foundPosition, 2, str[foundPosition + 1].toUpperCase());
    dashIndex = foundPosition + 1;
  }

  return String(str.join(''));
}

function removeClass(obj, cls) {
  var clsArray = obj.className.split(' ');
  var index = 0;
  while (true) {
    var foundPosition = clsArray.indexOf(cls, index);
    if (foundPosition == -1) break;

    clsArray.splice(foundPosition, 1);
    index = foundPosition;
  }

  obj.className = clsArray.join(' ');
  return obj;
}

function filterRangeInPlace(arr, a, b) {
  var copiedArr = arr.slice();
  arr.splice(0);
  for (i = a; i <= b; i++) {
    arr.push(copiedArr[i]);
  }
}

function reverseSort(arr) {
  function compareNumbers(a, b) {
    return a - b;
  }

  arr.sort(compareNumbers);
  arr.reverse();
}

function copyAndSortArray(arr) {
  var copiedArr = arr.slice();
  return copiedArr.sort();
}

function randomSort(arr) {
  arr.sort(function (a, b) {
    return Math.random() > 0.5 ? 1 : -1;
  });
}

function sortByAge(arr) {
  arr.sort(function (personA, personB) {
    return personA.age - personB.age;
  });
}

function unique(arr) {
  var obj = {};
  for (i = 0; i < arr.length; i++) {
    var sorted = arr[i];
    obj[sorted] = arr[i];
  }

  var result = [];
  for (var key in obj) result.push(obj[key]);
  return result;
}

console.log(unique(arr));
