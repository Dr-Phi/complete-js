"use strict";

// FUNDAMENTALS PART 1

// Challenge #1

let markM = 95;
let markH = 1.88;

let johnM = 85;
let johnH = 1.76;

let markBMI = (markM / markH ** 2).toFixed(1);
let johnBMI = (johnM / (johnH * johnH)).toFixed(1);

// const markHigherBMI = markBMI > johnBMI ? true:false;

// Challenge #2
console.log("%cBMI Calculator", "color:green;font-size:21px;");

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// Challenge #3
console.log("%cSports System", "color:#2da3ad;font-size:21px;");
const Dolphins = [97, 112, 101];
const Koalas = [109, 95, 123];

const calcAverage = (arr) =>
  arr.reduce((acc, cvalue) => acc + cvalue) / arr.length;

const avgD = calcAverage(Dolphins);
const avgK = calcAverage(Koalas);

console.log("avg Dolphins: " + avgD, "\navg Koalas: " + avgK);
if (avgD < 100 || avgK < 100 || avgD === avgK) {
  console.log("No one wins -_-");
} else {
  console.log(`${avgK > avgD ? "Koalas" : "Dolphins"} wins!`);
}

// Challenge #4
console.log("%cTip Calculator", "color:#b5982f;font-size:21px;");

let value = 430;

let tip1 = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;

console.log(
  `The bill was ${value}, the tip was ${tip1}, and the total value ` +
    (value + tip1)
);

// Fundamentals part 2
console.log("%c-------", "color:gray;font-size:21px;");
// Challenge #1
console.log("%cSports v2", "color:#2da3ad;font-size:21px;");

// Function written in line 35
const avgD2 = calcAverage([85, 54, 41]);
const avgk2 = calcAverage([23, 34, 27]);

function checkWinner(avgD, avgK) {
  if (avgD >= avgK * 2) {
    console.log(`Dolphins win (${avgD} vs. ${avgK})`);
  } else if (avgK >= avgD * 2) {
    console.log(`Koalas win (${avgK} vs. ${avgD})`);
  }
}

checkWinner(avgD2, avgk2);

// Challenge #2
console.log("%cTip Calculator v2", "color:#b5982f;font-size:18px;");

function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

// console.log(calcTip(100));

// const bills =[125, 555, 44];
// const tips = [];
// let total=[];
// let tip;
// for(const bill of bills){
//     tip = calcTip(bill);
//     tips.push(tip)
//     total.push(bill + tip);
// }

// console.log(bills, tips, total);

// Challenge ·3
console.log("%cBMI v2", "color:green;font-size:21px;");

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(1);
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(1);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
} else {
  console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
}

// Challenge #4
console.log("%cTip Calculator v3", "color:#b5982f;font-size:18px;");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let tip;
// Function written in line 82

for (const bill of bills) {
  tip = calcTip(bill);
  tips.push(tip);
  totals.push(bill + tip);
}

console.log(bills, tips, totals);
console.log("Average bills, tips and totals:");
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

// BONUS Challenge #Developer Skills & Editor Setup
console.log("%cBonus Challenge", "color:#purple;font-size:21px;");

//for each temp of the array, print a string with the temp and the counter of subsequent day
function printForecast(arr) {
  let i = 1;
  let str = "";
  for (const temp of arr) {
    str += `${temp}ºC in ${i} days... `;
    ++i;
  }
  console.log(str);
  return str;
}

const temps = [12, 5, -5, 0, 4];
printForecast(temps);
