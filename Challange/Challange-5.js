// Buatlah sebuah function untuk menghitung rata-rata nilai dari beberapa siswa. Function ini menerima array berisi nilai-nilai murid dan mengembalikan nilai rata-ratanya. Nilai-nilai tersebut direpresentasikan dengan tipe data Number.

const nilai = [80,65,75,90,87]
const nilai2 = [92,84,70,86,79,91]

function solution(arrNilai) {
    let jumlah = 0;
    for(const i of arrNilai){
        jumlah = jumlah + i
    }

    let hasil = jumlah/arrNilai.length
    return console.log(parseFloat(hasil.toFixed(2)))
}

solution(nilai)
solution(nilai2)