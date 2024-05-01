function penjumlahan(a,b){
    return a + b
}

function ucapan(nama, bahasa){
    if(bahasa === "Indonesia") return console.log(`Selamat Datang, ${nama}`)
    if(bahasa === "English") return console.log(`Good Morning, ${nama}`)
    return console.log(`Hello, ${nama}`)
}

console.log(penjumlahan(2,3))
ucapan("Jhon Doe", "Indonesia")

// Expression Function

const coba = function(nama, bahasa){
    if(bahasa === "Indonesia") return console.log(`Selamat Datang, ${nama}`)
    if(bahasa === "English") return console.log(`Good Morning, ${nama}`)
    return console.log(`Hello, ${nama}`)
}

coba("Ahmad", "English")