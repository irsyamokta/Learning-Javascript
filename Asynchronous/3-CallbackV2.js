const token = Math.floor(Math.random() * 1000)
const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username, callback) {
    console.log("Data Sedang di Proses...")
    setTimeout(() => {
        callback({ token, username })
    }, 1000)
}

function getUser(token, callback) {
    console.log("API KEY Sedang di proses...")
    setTimeout(() => {
        if (token) {
            callback({ apiKey: "XYZ123" })
        }
    }, 2000)
}

function getPictures(apiKey, callback) {
    if (apiKey)
        setTimeout(() => {
            callback(pictures)
        }, 3000)
}

login('pqryd', (response) => {
    const { token } = response
    // console.log(token)
    getUser(token, (response) => {
        const { apiKey } = response
        // console.log(apiKey) 
        getPictures(apiKey, (response) => {
            const pic = response
            console.log(pic)
        })
    })
})

