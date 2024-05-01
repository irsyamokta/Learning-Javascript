// Jika parameter hanya satu tidak perlu ada tanda kurung
// Jika tidak memiliki parameter cukup gunkan tanda kurung
// Jika body funtion hanya berisi satu baris, kurung kurawal boleh dihapus dan return tidak diperlukan

const sayHello = hello => {
    return console.log(`${hello}`)
}

const perkalian = (a,b) => {
    return a * b
}

const ucapan = () => {
    return "Selamat Pagi"
}

const ucapanLagi = () => console.log("Hello Guys");

const penjumlahan = (a,b) => a + b

sayHello("Hello World")
console.log(perkalian(2,3))
console.log( ucapan())
ucapanLagi()
console.log(penjumlahan(20,21))
