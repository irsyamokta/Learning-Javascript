const token = Math.floor(Math.random() * 12345)
const pictures = ['1.jpg', '2.jpg', '3.jpg']

function login(username, callback) {
    console.log('Data Sedang Diproses...')
    setTimeout(() => {
        callback({ username, token })
    }, 2000)
}

function getUser(token, callback) {
    console.log('APIKEY Diproses...')
    const apiKey = { apiKey: 'XYZ123' }
    if (token) {
        setTimeout(() => {
            callback(apiKey)
        }, 1000)
    }
}

function getPictures(apiKey, callback) {
    console.log('Data Gambar Diproses...')
    if (apiKey){
        setTimeout(() => {
            callback(pictures)
        }, 500)
    }
}

login('Fadil', (result) => {
    const token = result.token
    const username = result.username
    console.log(username)
    getUser(token, (result) => {
        const {apiKey} = result
        console.log(apiKey)
        getPictures(apiKey, (result) => {
            console.log(result)
        })
    })
})

