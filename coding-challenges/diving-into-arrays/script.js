const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

function checkDogs(arr1 = [], arr2 = []) {
    const arr1Copy = arr1.slice(1, -2);
    console.log(arr1Copy)
    const bothArr = arr1Copy.concat(arr2)
    bothArr.forEach((dog, i) => console.log("Dog number", i + " is", dog >= 3 ? `an adult, and is ${dog} years old` : "still a puppy 🐶"))
}

// checkDogs(julia, kate)
// console.log("DATA #2")
// checkDogs(julia2, kate2)

// Challenge #2
// convert dog ages to human ages and calculate the average age of the dogs

const calcAverageHumanAge = function (dogsAges) {
    const humanAges = dogsAges.map((dog) => dog > 2 ? 16 + dog * 4 : 2 * dog)
    const over18 = humanAges.filter((age) => age >= 18)
    return (over18.reduce((acc, cv) => acc + cv) / over18.length)
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))

// Challenge # 3
// Rewrite the  function from Challenge #2, but this time as an arrow function and using chaining

const calcAvgHumanAge = dogAges => dogAges.map((dog) => dog > 2 ? 16 + dog * 4 : 2 * dog).filter((age) => age >= 18).reduce((acc, cv, _, arr) => acc + cv / arr.length, 0);

console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]))
