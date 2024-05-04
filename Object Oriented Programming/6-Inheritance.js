class Car{
    constructor(brand, color){
        this.brand = brand
        this.color = color
        this._generateCarId = this._generateCarId()
    }

    drive(driver, speed){
        return console.log(`${driver} mengendari mobil ${this.brand} id ${this._generateCarId} yang berwarna ${this.color} dengan kecepatan ${speed} Km/Jam`)
    }

    refill(liter){
        return console.log(`${this.brand} mengisi bensin sebanyak ${liter} Liter`)
    }

    _generateCarId(){
        return (`${this.brand} - ${Math.floor(Math.random() * 100) + 1}`)
    }
}

class SuperCar extends Car{
    onTheWay(driver, speed){
        return this.drive(driver, speed)
    }
}

class FamilyCar extends Car{
    fuel(liter){
        return this.refill(liter)
    }

    onTheWay(driver, speed){
        return this.drive(driver, speed)
    }
}

let ferrary = new SuperCar("Ferrary", "Black")
let avanza = new FamilyCar("Avanza", "White")

ferrary.drive("Herman", 120)
avanza.drive("Gerry", 100)
avanza.refill(100)