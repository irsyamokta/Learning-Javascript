const user = {
    firstName: "Jhon", // firstName is key, "Jhon" is value
    lastName: "Doe",
    age: 20,
    isMerried: true
}

user.firstName = "Ahmad" // Exp for modification object
user.address = "Chicago" // Exp for add new property because property not found in object user
delete user.isMerried // Exp for delete property

console.log(`Hello, ${user.firstName}`)
console.log(`Your age is ${user.age}`)
console.log(user)