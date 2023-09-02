// const country = "Colombia";
// const continent = "America";
// let population = 51;

// console.log(country, continent, population);

// const isIsland = false;
// let language;

// console.log(typeof(isIsland), typeof(population), typeof(country), typeof(language));

// language = "English";

// let halfCol = population / 2;

// console.log(halfCol);
// console.log(population+1);
// console.log(6 < population);
// console.log(33 > population);

// let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
// console.log(description);

// let description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`
// console.log(description2);

// if(population > 33){
//     console.log(`${country}'s population is above average`);
// }else{
//     console.log(`${country}'s population is ${33 - population} million below average'`);
// }

// // console.log('9' - '5', '19' - '13' + '17', '19'-'13'+17, '123'<57, 5+6+'4'+9-4-2);

// // const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// // if (numNeighbours === 1){
// //     console.log("Only 1 border!");
// // }else if (numNeighbours > 1){
// //     console.log("More than 1 border");
// // }else{
// //     console.log("No borders");
// // }

// if (language == "English" && population < 50 && isIsland == false ){
//     console.log(`You should live in ${country} :)`);
// }else{
//     console.log(`${country} does not meet your criteria :(`);
// }

// //Switch case
// switch (language){
//     case 'Chinese':
//     case 'Mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'Spanish':
//         console.log("2nd place in # of native speakers");
//         break;
//     case 'English':
//         console.log('3rd place');
//         break;
//     case 'Hindi': 
//         console.log('Number 4');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// console.log(`${country}'s population is ${population > 33?"above":"below"} average`); 

//Part 2

function describeCountry(country,population,capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

let infoCol = describeCountry("Colombia", 51, "Medellín")
console.log(infoCol);

function percentageOfWorld1(population){
    return (population / 7900 * 100).toFixed(2)
}

console.log(percentageOfWorld1(1441));

const percentageOfWorld2 = function(population){
    return (population / 7900 * 100).toFixed(2)
}

console.log(percentageOfWorld2(247));

const percentageOfWorld3 = population => (population / 7900 * 100).toFixed(2)

console.log(percentageOfWorld3(51));

function describePopulation(country, population){
    const perc = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${perc}% of the world.`
}

console.log(describePopulation("China", 1441));


const neighbours = ["Mexico", "Canada"];

neighbours.push("Utopia")

console.log(neighbours);

neighbours.pop()

if (!neighbours.includes("Germany")){console.log("Probably not a central European country")}

neighbours[0] = "Weys";

console.log(neighbours);
myCountry ={
   country: "Morocco",
   capital: "Rabat",
   language: "Arabic",
   population: 37,
   neighbours: ["Spain", "Algeria", "Western Sahara"]
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

myCountry.describe = function (){
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
}
myCountry.describe();

myCountry.checkIsland = function(){
    this.isIsland = this.neighbours.length < 1 ? true:false;
}
myCountry.checkIsland();
console.log(myCountry);

// for(let i = 1; i < 51; i++){
//     console.log(`Voter number ${i} is currently voting`);
// }

const populations = [51, 220, 1441, 27]
const percentages = [];

for(const population of populations){
   percentages.push(percentageOfWorld1(population)); 
}

console.log(percentages);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for( array of listOfNeighbours){
    for(let country of array){
        console.log(`Neighbour: ${country}`);
    }
}

const percentages2 =[];

let i = 0;
while(i < populations.length){
    percentages2.push(percentageOfWorld1(populations[i]));
    ++i
}

console.log(percentages2);