// const Mobil = {
//     merek: "Toyota Alphard",
//     warna: "Hitam",
//     kecepatan: 120,
//     nomor: "B1234",
//     maju: () => console.log("Maju"),
//     mundur: () => console.log("Mundur"),
//     belok: () => console.log("Belok")
// }

// console.log(Mobil.merek)

class Mobil{
    constructor(merek, warna, kecepatan, nomor){
        this.merek = merek
        this.warna = warna
        this.kecepatan = kecepatan
        this.nomor = nomor
    }

    jalan() {
        console.log("Kiri")
    }

    mundur(){
        return console.log("Mundur")
    }
}

const Ferrary = new Mobil("Ferrary", "Black", "270", "2020")

Ferrary.jalan()