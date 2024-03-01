const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

function checkDogs(arr1=[], arr2=[]){
    const arr1Copy = arr1.slice(1, -2);
    console.log(arr1Copy)
    const bothArr = arr1Copy.concat(arr2)
    bothArr.forEach((dog, i)=> console.log("Dog number",i+" is", dog >= 3?`an adult, and is ${dog} years old`:"still a puppy 🐶"))
}
checkDogs

checkDogs(julia, kate)
console.log("DATA #2")
checkDogs(julia2, kate2)

