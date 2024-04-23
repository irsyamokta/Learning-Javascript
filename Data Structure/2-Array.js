let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

for(const i of myArray){
    console.log(i)
}

// Array Push & Pop

myArray.push("JavaScript") // Add the last data
console.log(myArray)

myArray.pop() // Delete the last data
console.log(myArray)

// Shift & Unshift

myArray.shift() // Delete the most advanced data
console.log(myArray)

myArray.unshift("Apple") // Adding the most advanced data
console.log(myArray)


// Splice & Slice

myArray.splice(3, 4)
console.log(myArray)

const newArray = myArray.slice(2, 3)
console.log(newArray)

// Spread Operator Array

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];
const joinFavorites = [...favorites, ...others]
console.log(allFavorites);
console.log(joinFavorites);

// Spread Operator Object

const obj1 = {
    firstName: "Jhon",
    age: 19
}

const obj2 = {
    lastName: "Doe",
    gender: "Male"
}

const allObj = {...obj1, ...obj2}
console.log(allObj)


