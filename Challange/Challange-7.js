// Buatlah sebuah fungsi yang menerima sebuah bilangan bulat positif dan mengembalikan nilai boolean apakah bilangan tersebut merupakan bilangan prima atau bukan. Sebuah bilangan bulat dinyatakan sebagai bilangan prima jika hanya dapat dibagi oleh 1 dan dirinya sendiri.

function isPrime(num) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(20));
