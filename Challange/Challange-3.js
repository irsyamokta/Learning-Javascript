// Fungsi akan menerima sebuah string suhu dan mengembalikan status 'Panas' jika suhu lebih dari 30 derajat, 'Normal' jika suhu antara 20-30 derajat, dan 'Dingin' jika suhu kurang dari 20 derajat

function solution(temperature) {
    if(temperature > 30) return "Panas"
    if(temperature >= 20 && temperature <= 30) return "Normal"
    if(temperature < 20) return "Dingin"
}

console.log(solution(25))