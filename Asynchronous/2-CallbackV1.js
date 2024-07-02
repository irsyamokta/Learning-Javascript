import { promisify } from 'util';

function getUsers(isOffline, callback){
    console.log('Hello')
    setTimeout(() => {
        const users = ['Jhon', 'Aldi', 'Abdul']
        callback(users)
        if (isOffline){
            callback(new Error('Tidak bisa mendapatkan data'), null)
            return
        }
        callback(null, users)
    }, 3000)
}

function userCallback(error, users){
    if(error){
        console.log('Gagal : ', error.message)
        return
    }

    console.log('success : ', users)
}

// getUsers(false, userCallback)
const data = promisify(getUsers) // Mengubah Callback menjadi Promise
data(false, userCallback)