var myNumberArray = [];

createNumber();
while (!compare()) {
  compare();
}

console.log('Congratulation! you win! ;-)');

function createNumber() {
  var numbArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  while (myNumberArray.length < 4)
  {
    var rand = Math.floor(Math.random() * 10);
    if (numbArray[rand] != (null || undefined)) {
      myNumberArray.push(numbArray[rand]);
      numbArray.splice(rand, 1);
    } else {
      continue;
    }
  }

  myNumberArray = myNumberArray.join('');
}

function compare() {
  var check = false;
  var bull = 0;
  var cow = 0;
  const readlineSync = require('readline-sync');
  var custArray = readlineSync.question('Enter your number please \n');
  if (custArray.length < 4) {
    console.log('Too short');
  } else if (custArray.length > 4) {
    console.log('Too long');
  } else {
    for (var i = 0; i < myNumberArray.length; ++i) {
      if (myNumberArray.charAt(i) == custArray.charAt(i)) {
        bull++;
        continue;
      }

      if (myNumberArray.indexOf(custArray.charAt(i)) != -1) {
        cow++;
      }
    }

    console.log(bull + 'bulls, ' + cow + 'cows');
    if (bull == 4) {
      check = true;
    }
  }

  return check;
}
