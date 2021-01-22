// https://github.com/jonytalukdar/assignment

// first problem

function kilometerToMeter(kilometer) {
  meter = kilometer * 100;
  return meter;
}

var resultOfMeter = kilometerToMeter(12);
console.log(resultOfMeter);

// second problem

function budgetCalculator(ghori, phone, laptop) {
  var totalGhori = 50 * ghori;
  var totalPhone = 100 * phone;
  var totalLaptop = 500 * laptop;
  totatBudget = totalGhori + totalPhone + totalLaptop;
  return totatBudget;
}

var resultOfBudget = budgetCalculator(4, 3, 2);
console.log(resultOfBudget);

// third problem

function hotelCost(spendDay) {
  var totatSpend = 0;
  if (spendDay <= 10) {
    totatSpend = spendDay * 100;
  } else if (spendDay <= 20) {
    var firstTenDays = 10 * 100;
    var remainingDays = spendDay - 10;
    var secondTenDays = remainingDays * 80;
    totatSpend = firstTenDays + secondTenDays;
  } else {
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remainingDays = spendDay - 20;
    var thirdStage = remainingDays * 50;
    totatSpend = firstTenDays + secondTenDays + thirdStage;
  }
  return totatSpend;
}

var resultOfCost = hotelCost(24);
console.log(resultOfCost);

// fourth problem

var friendsName = ['Joney', 'Shimul', 'Akash', 'Rashedul', 'Robin', 'kawsar'];

function megaFriend(friendsName) {
  var largestName = '';
  for (var i = 0; i < friendsName.length; i++) {
    if (largestName.length < friendsName[i].length) {
      largestName = friendsName[i];
    }
  }
  return largestName;
}

var resultOfLarge = megaFriend(friendsName);
console.log(resultOfLarge);
