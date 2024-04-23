// FPB (Faktor Persekutuan Terbesar) dari suatu bilangan adalah bilangan bulat terbesar yang dapat membagi habis kedua bilangan tersebut. Buatlah sebuah fungsi yang menerima 2 parameter bilangan bulat positif dan menghasilkan output berupa FPB dari kedua bilangan tersebut.

function solution(a, b) {
    if(b === 0) return a
    return solution(b, a%b)
}

solution(50, 70)
solution(18, 24)