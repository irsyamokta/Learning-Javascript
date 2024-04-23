// Destructuring Object

const profile = {
    firtName: "Jhone",
    lastName: "Doe",
    age: 19
}

const {firtName, lastName, age} = profile

console.log(firtName, lastName, age)
console.log(profile)

// Destructuring Object

const pet = {
    petName: "Oyen",
    type: "Cat",
    color: "Orange"
}

let petName = "Abu";
let color = "Cat";

({petName, color} = pet)

console.log(petName)
console.log(color)



