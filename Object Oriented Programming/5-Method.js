class Mail {
    constructor(pengirim, penerima, subjek) {
        this.pengirim = pengirim
        this.penerima = penerima
        this.subjek = subjek
        this._date = this._generateDate()
    }

    get date() {
        return this._date
    }

    set date(date) {
        console.log("Tidak bisa mengubah tanggal")
    }

    mengirim() {
        console.log(`Pengirim : ${this.pengirim}, Penerima : ${this.penerima}, Subjek : ${this.subjek}, Date : ${this._generateDate()}`)
    }

    menerima() {
        console.log(`Pengirim : ${this.pengirim}, Penerima : ${this.penerima}, Subjek : ${this.subjek}, Date : ${this._generateDate()}`)
    }

    _generateDate() {
        const dateSend = new Date()
        const format = dateSend.toLocaleDateString()

        return format
    }
}

let mail = new Mail("Abdul", "Ani", "Pertemanan")
console.log(mail)

// Mencoba mengubah tanggal
mail.date = mail._generateDate()



// Private Proerty
class Car {
    #chassisNumber = null; // enclosing class

    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.#chassisNumber = this.#generateChassisNumber();
    }

    get chassisNumber() {
        return this.#chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
    }

    // Methods
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn(direction) {
        console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }

    #generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}