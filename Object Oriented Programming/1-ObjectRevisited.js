const Mobil = {
    merek: "Toyota Alphard",
    warna: "Hitam",
    kecepatan: 120,
    nomor: "B1234",
    maju: () => console.log("Maju"),
    mundur: () => console.log("Mundur"),
    belok: () => console.log("Belok") 
}

console.log(Mobil.merek)
console.log(Mobil.warna)
console.log(Mobil.kecepatan)
console.log(Mobil.nomor)
Mobil.maju()
Mobil.mundur()
Mobil.belok()