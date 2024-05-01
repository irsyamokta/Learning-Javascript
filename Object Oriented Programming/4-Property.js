class Mobil{
    constructor(brand, warna, kecepatan){
        this.brand = brand
        this.warna = warna
        this.kecepatan = kecepatan
        this.nomor = `${this.brand} - ${Math.floor(Math.random() * 1000) + 1}`
    }

    maju(speed){
        return console.log(`${this.brand} memiliki nomor ${this.nomor} berjalan dengan kecepatan ${speed}`)
    }
}

const toyota = new Mobil("Toyota", "Hitam", 210)
toyota.nomor = "B-101"

// toyota.maju(120)
// console.log(toyota)

// Getter dan Setter
// Untuk memproteksi agar suatu property tidak bisa diubah

class User{
    constructor(nama, umur, gender){
        this.nama = nama
        this.umur = umur
        this.gender = gender
    }

    get identity(){
        return console.log(`Nama : ${this.nama}, umur : ${this.umur}, gender : ${this.gender}`)
    }

    set identity(identity){
        const [nama, umur, gender] = identity
        this.nama = nama
        this.umur = umur
        this.gender = gender
    }
}

const user = new User("Jhon", 50, "Male")

user.identity = ["Ahmeng", 42, "Male"]
console.log(user.identity)

class Mahasiswa{
    constructor(nama, nim){
        this.nama = nama
        this.nim = nim
        this._kelas = "SI-06A"
    }

    get kelas(){
        return this._kelas
    }

    set kelas(kelas){
        console.log("Kesalahan, Tidak bisa merubah kelas")
    }
}

let abdul = new Mahasiswa("Abdul Latif", "2211103003")
console.log(abdul.kelas)
abdul.kelas = "SI-06B"
console.log(abdul.kelas)