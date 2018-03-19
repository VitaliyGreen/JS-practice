"use strict"
function isEmpty(obj) {
  let counter = 0;
  for (let prop in obj) {
      counter++;
  }
  return counter > 0 ? true : false;
}

function sumSalarie(obj) {
  let result = 0;
  for (var prop in obj) {
    result += +obj[prop];
  }
  return result;
}

function maxSalarie(obj) {
  let result = 0,
      id;
  for (var prop in obj) {
    if(obj[prop] > result){
      result = obj[prop];
      id = prop;
    }
  }
  return result > 0 ? id : "Not found";
}

function multiplyNumeric(obj) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }
  for (var prop in obj) {
    if (isNumeric(obj[prop]))
      obj[prop] *= 2;
  }
  return obj;
}

var salaries = {
  "Vas" : 20,
  "Pet" : 10,
  "Das" : null
};

console.log(multiplyNumeric(salaries));
