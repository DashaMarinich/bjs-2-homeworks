"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  if (a == 0)
    return arr
  let dis = b ** 2 - 4 * a * c;
  console.log('D = ' + dis);
  if (dis < 0)
    return arr;
  if (dis == 0)
    arr.push(-b / (2 * a));
  if (dis > 0) {
    arr.push((-b + Math.sqrt(dis)) / (2*a));
    arr.push((-b - Math.sqrt(dis)) / (2*a));
  }
  
  return arr;
};

console.log(solveEquation());



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = (percent / 100) /12;
  let bodyCredit = amount - contribution;
  let payment = bodyCredit * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));
  let totalAmount = payment * countMonths;
  let total = totalAmount.toFixed(2);
  return parseFloat(total);
  
  };
console.log(calculateTotalMortgage());