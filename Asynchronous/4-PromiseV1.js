// Promise di JavaScript pun memiliki konsep yang sama karena memiliki beberapa kondisi, yaitu pending, fulfilled, dan rejected.

// Pending merupakan keadaan Promise sedang berjalan.
// Fulfilled merupakan keadaan Promise yang terpenuhi.
// Rejected merupakan keadaan Promise yang gagal terpenuhi.

function getUsers(isOffline){
    // Mengembalikan sebuah objek Promise

    return new Promise((resolve, reject) => {
        // Simulasi jaringan delay
        setTimeout(() => {
            const users = ['Abdul', 'Jono', 'Ani']

            if(isOffline){
                reject(new Error('Tidak bisa mendapatkan data'))
                return
            }
            resolve(users)
        }, 3000)
    })
}

getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message))