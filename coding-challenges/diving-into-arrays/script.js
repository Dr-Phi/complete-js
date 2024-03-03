const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

function checkDogs(arr1 = [], arr2 = []) {
    const arr1Copy = arr1.slice(1, -2);
    const bothArr = arr1Copy.concat(arr2)
    bothArr.forEach((dog, i) => console.log("Dog number", i + " is", dog >= 3 ? `an adult, and is ${dog} years old` : "still a puppy 🐶"))
}
console.log("Challenge 1")
checkDogs(julia, kate)
// console.log("DATA #2")
// checkDogs(julia2, kate2)

// Challenge #2
// convert dog ages to human ages and calculate the average age of the dogs

const calcAverageHumanAge = function (dogsAges) {
    const humanAges = dogsAges.map((dog) => dog > 2 ? 16 + dog * 4 : 2 * dog)
    const over18 = humanAges.filter((age) => age >= 18)
    return (over18.reduce((acc, cv) => acc + cv) / over18.length)
}

console.log("Challenge 2")
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))

// Challenge # 3
// Rewrite the  function from Challenge #2, but this time as an arrow function and using chaining

const calcAvgHumanAge = dogAges => dogAges.map((dog) => dog > 2 ? 16 + dog * 4 : 2 * dog).filter((age) => age >= 18).reduce((acc, cv, _, arr) => acc + cv / arr.length, 0);

console.log("Challenge 3")
console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]))

// Challenge # 4
console.log("Challenge 4")
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// for each dog, calculate the recommended food portion and add it to the object as a new property
dogs.forEach(dog => {
    dog.portion = dog.weight ** 0.75 * 28
})

// Find if Sarah's dog is eating too much or too little
const sDog = dogs[dogs.findIndex((dog) => dog.owners.includes('Sarah'))]
if (sDog.curFood > sDog.portion * 1.1) {
    console.log(`Sarah's dog is eating too much.\nCurrent portion: ${sDog.curFood}g\nRecommended: ${sDog.portion.toFixed(1)}g`)
} else if (sDog.curFood < sDog.portion * 0.9) {
    console.log(`Sarah's dog is eating too little.\nCurrent portion: ${sDog.curFood}g\nRecommended: ${sDog.portion.toFixed(1)}g`)
} else {
    console.log("Sarah's dog is eating just fine")
}

// Create an array containing all owners of dogs who eat too much and other for too litle

const ownersEatTooMuch = dogs.filter((dog) => dog.curFood > dog.portion * 1.1).flatMap(dog => dog.owners)
console.log(ownersEatTooMuch)

const ownersEatTooLittle = dogs.filter((dog) => dog.curFood < dog.portion * 0.9).flatMap(dog => dog.owners)
console.log(ownersEatTooLittle)

// Log a string to the console for each array created in 3
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`)

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`)

// Log whether there is any dog eating exactly the amount of food that is recommended

console.log(dogs.some((dog) => dog.curFood === dog.portion))

// Log whether there is any dog eating an okay amount of food

const eatingFine = (dog) => dog.curFood < dog.portion * 1.1 && dog.curFood > dog.portion * 0.9;

console.log(dogs.some(eatingFine))

// Create an array containing the dogs that are eating an okay amount of food
const dogsEatingFine = dogs.filter(eatingFine)
console.log(dogsEatingFine)

// Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order
const dogsSorted = dogs.slice().sort((a, b) => a.portion - b.portion)
console.log("Dogs:", dogs)
console.log("Dogs sorted by Portion:", dogsSorted)