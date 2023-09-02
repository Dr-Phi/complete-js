'use strict';

// FUNDAMENTALS PART 1

// Challenge #1

let markM= 95;
let markH= 1.88;

let johnM = 85;
let johnH = 1.76;

let markBMI = (markM / markH ** 2).toFixed(1);
let johnBMI = (johnM / (johnH * johnH)).toFixed(1);

// const markHigherBMI = markBMI > johnBMI ? true:false;


// Challenge #2
console.log("%cBMI Calculator","color:green;font-size:21px;"
);

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`); 
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// Challenge #3
console.log("%cSports System","color:#2da3ad;font-size:21px;"
);
const Dolphins = [97, 112, 101];
const Koalas = [109, 95, 123];

const avgD = Dolphins.reduce((acc, cvalue) => acc + cvalue) / 3;
const avgK = Koalas.reduce((acc, cvalue) => acc + cvalue) / 3;

console.log("avg Dolphins: " + avgD,"\navg Koalas: " + avgK);
if((avgD < 100 || avgK < 100) || avgD === avgK){
    console.log("No one wins -_-");
} else{
    console.log(`${avgK > avgD? "Koalas":"Dolphins"} wins!`);
}

// Challenge #4
console.log("%cTip Calculator","color:#b5982f;font-size:21px;"
);

let value = 430;

let tip = value >= 50 && value <= 300? value*0.15:value*0.2;

console.log(`The bill was ${value}, the tip was ${tip}, and the total value ` + (value + tip));

// Fundamentals part 2
console.log("%c-------","color:gray;font-size:21px;"
);
// Challenge #1
console.log("%cSports v2","color:#2da3ad;font-size:21px;"
);