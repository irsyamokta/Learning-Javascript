// Buatlah sebuah fungsi yang menerima sebuah array berisi nama-nama buah, termasuk pisang. Fungsi ini akan menerima parameter boolean "true" atau "false" yang menentukan apakah hasil pengurutan akan berdasarkan urutan abjad atau urutan terbalik.

// Fungsi harus mengembalikan array yang sudah terurut sesuai dengan parameter string yang diberikan. Jika parameter boolean bernilai "true", maka array diurutkan secara ascending (A-Z), jika "false" maka array diurutkan secara descending (Z-A).

const arrBuah = ["apel", "pisang", "jeruk", "mangga"]

function solution(arrBuah, isAscending) {
    if(isAscending) return arrBuah.sort()
    if(!isAscending) {
        return arrBuah.sort((a, b) => b.localeCompare(a));
    }
}

console.log(solution(arrBuah, true))
console.log(solution(arrBuah, false))
