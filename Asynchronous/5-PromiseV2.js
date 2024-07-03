const token = Math.floor(Math.random() * 1000)
const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log("Data Sedang di Proses...")
    return new Promise((success, failed) => {
        if (username != 'qwertyui') failed('username salah')
        setTimeout(() => {
            success({token, username})
        }, 1000)
    })
}
 
function getUser(token) {
    console.log("API KEY Sedang di proses...")
    return new Promise((success, failed) => {
        if (!token || typeof(token) != 'number') failed('Kamu tidak memiliki akses Token!')
        setTimeout(() => {
            success({ apiKey: "XYZ123" })
        }, 2000)
    })
}

function getPictures(apiKey) {
    console.log('Picture Sedang Diproses')
    return new Promise((success, failed) => {
        if (!apiKey) failed('Kamu tidak memiliki APIKEY!')
        setTimeout(() => {
            success (pictures)
        }, 3000)
    })
}

const user = login('qwertyui')
user.then((result) => {
    console.log('Username : ' + result.username)
    const token = result.username
    getUser(token).then((result) => {
        const { apiKey } = result
        console.log('API KEY : ' + apiKey)
        getPictures(apiKey).then((result) => {
            console.log(result)
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}).catch(err => console.log(err))



