// first problem

function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}

var resultOfMeter = kilometerToMeter(12);
console.log(resultOfMeter);

// second problem

function budgetCalculator(ghori, phone, laptop) {
  var totalGhori = 4 * ghori;
  var totalPhone = 3 * phone;
  var totalLaptop = 2 * laptop;
  totatBudget = totalGhori + totalPhone + totalLaptop;
  return totatBudget;
}

var resultOfBudget = budgetCalculator(50, 100, 500);
console.log(resultOfBudget);

// third problem

function hotelCost(spendDay) {
  var totatSpend = 0;
  if (spendDay <= 10) {
    totatSpend = spendDay * 100;
  } else if (spendDay <= 20) {
    var firstTenDays = 10 * 100;
    var remainingDay = spendDay - 10;
    var secondTenDays = remainingDay * 80;
    totatSpend = firstTenDays + secondTenDays;
  } else {
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remainingDay = spendDay - 20;
    var thirdStage = remainingDay * 50;
    totatSpend = firstTenDays + secondTenDays + thirdStage;
  }
  return totatSpend;
}

var resultOfCost = hotelCost(24);
console.log(resultOfCost);