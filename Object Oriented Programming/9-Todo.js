class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Rabbit extends Animal{
    constructor(name, age, isMamal){
        super(name, age)
        this.isMamal = true
    }
    eat(){
        return console.log(`${this.name} sedang makan!`)
    }
}

class Eagle extends Animal{
    constructor(name, age, isMamal){
        super(name, age)
        this.isMamal = false
    }
    fly(){
        return console.log(`${this.name} sedang terbang!`)
    }
}

let myRabbit = new Rabbit("Labi", 2)
let myEagle = new Eagle("Elo", 4)

console.log(myRabbit)
console.log(myEagle)
myRabbit.eat()
myEagle.fly()