const country = "Colombia";
const continent = "America";
let population = 51;

console.log(country, continent, population);

const isIsland = false;
let language;

console.log(typeof(isIsland), typeof(population), typeof(country), typeof(language));

language = "Spanish";

let halfCol = population / 2;

console.log(halfCol);
console.log(population+1);
console.log(6 < population);
console.log(33 > population);

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

let description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description2);

if(population > 33){
    console.log(`${country}'s population is above average`);
}else{
    console.log(`${country}'s population is ${33 - population} million below average'`);
}

console.log('9' - '5', '19' - '13' + '17', '19'-'13'+17, '123'<57, 5+6+'4'+9-4-2);
