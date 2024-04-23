// Challenge ini akan menguji kemampuanmu dalam membuat sebuah function untuk mengecek status baterai. Kamu akan diberikan data tentang level baterai dalam bentuk persentase. Kamu harus membuat sebuah function untuk mengecek status baterai berdasarkan level baterai yang diberikan.

// Rules

// Buatlah sebuah function dengan nama solution yang menerima satu parameter bertipe data number.
// Function harus mengembalikan nilai berupa status baterai.
// Jika level baterai di atas 80%, status baterai adalah 'Penuh'.
// Jika level baterai di antara 20% dan 80%, status baterai adalah 'Sedang'.
// Jika level baterai di bawah 20%, status baterai adalah 'Rendah'.
// Contoh kasus, kita ambil kasus dimana parameter input bernilai 85. Dalam kasus ini, hasil yang diperoleh adalah 'Penuh'.

function solution(levelBaterai) {
    if(levelBaterai > 80) return "Penuh"
    if(levelBaterai >= 20 && levelBaterai <= 80) return "Sedang"
    if(levelBaterai < 20) return "Rendah"
}

console.log(solution(85))