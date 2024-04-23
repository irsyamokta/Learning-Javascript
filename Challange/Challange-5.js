// Buatlah sebuah function untuk menghitung rata-rata nilai dari beberapa siswa. Function ini menerima array berisi nilai-nilai murid dan mengembalikan nilai rata-ratanya. Nilai-nilai tersebut direpresentasikan dengan tipe data Number.

const nilai = [80,65,75,90,87]
const nilai2 = [92,84,70,86,79,91]

function solution(arrNilai) {
    let jumlah = 0;
    for(let i = 0; i < arrNilai.length; i++){
        jumlah = jumlah + arrNilai[i]
    }
    
    let hasil = jumlah/arrNilai.length
    return console.log(parseFloat(hasil.toFixed(2)))
}

solution(nilai)
solution(nilai2)