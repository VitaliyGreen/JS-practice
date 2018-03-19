function ucFirst(str) {
  if (str == 0) return '';
  var upString = str.charAt(0).toUpperCase() + str.slice(1);
  return upString;
}

function checkSpam(str) {
  var base = ['viagra', 'xxx'];
  str = str.toLowerCase();
  for (var i = 0; i < base.length; i++) {
    if (~str.indexOf(base[i])) {
      return true;
    }
  }
  return false;
}

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    str = str.slice(0, maxLength - 3) + '...';
    return str;
  } else {
    return str;
  }
}

function extractCurrencyValue(str) {
  if (str.charAt(0) == '$') {
    str = parseInt(str.slice(1));
    return str;
  } else {
    return false;
  }
}

function getDecimal(num) {
  var fullNum = num.toFixed(0);
  var res =  (num - fullNum).toFixed(5) * 1;
  return res < 0 ? -res : res;
}

function fibBinet(n) {
  var fi = (1 + Math.sqrt(5)) / 2;
  res = Math.pow(fi, n) / Math.sqrt(5);
  return res;
}

console.log(fibBinet(77));
