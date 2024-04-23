// Challenge ini akan menguji kemampuanmu dalam menghitung luas lapangan sepak bola. Kamu akan diberikan data tentang panjang dan lebar lapangan sepak bola. Kamu harus menghitung luas lapangan sepak bola berdasarkan panjang dan lebar yang diberikan.

// Rules

// Buatlah sebuah function dengan nama solution yang menerima dua parameter bertipe data number.
// Function harus mengembalikan nilai berupa luas lapangan sepak bola.
// Gunakan rumus luas lapangan sepak bola yaitu panjang x lebar.
// Contoh kasus, kita ambil kasus dimana parameter input bernilai panjang 110 meter dan lebar 70 meter. Dalam kasus ini, hasil yang diperoleh adalah 7700 meter persegi. Penjelasan lanjutan: 110 x 70 = 7700

function solution(panjang, lebar) {
    return panjang  * lebar
}

console.log(solution(110, 70))