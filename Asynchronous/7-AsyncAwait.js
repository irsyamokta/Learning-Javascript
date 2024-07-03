const token = Math.floor(Math.random() * 1000)
const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log("Pengecekan Username...")
    return new Promise((success, failed) => {
        if (username != 'pratamaryd') failed('Username Tidak Sesuai!')
        setTimeout(() => {
            success({ token, username })
        }, 2000)
    })
}

function getUser(token) {
    console.log("API KEY Sedang Diproses...")
    return new Promise((success, failed) => {
        if (!token || typeof (token) != 'number') failed('Gagal, Kamu Tidak Memiliki Akses Token!')
        setTimeout(() => {
            success({ apiKey: "XYZ123" })
        }, 4000)
    })
}

function getPictures(apiKey) {
    console.log('Picture Sedang Diproses...')
    return new Promise((success, failed) => {
        if (!apiKey) failed('Gagal, Kamu Tidak Memiliki API KEY!')
        setTimeout(() => {
            success(pictures)
        }, 5000)
    })
}

const viewUser = async () => {
    try {
        const user = await login('pratamaryd')
        const { apiKey } = await getUser(user.token)
        const getUserPictures = await getPictures(apiKey)

        console.log('\n================================')
        console.log(`Username Anda : ${user.username}`)
        console.log(`Token Anda    : ${user.token}`)
        console.log(`APIKEY Anda   : ${apiKey}`)
        console.log(`Pictures Anda : ${getUserPictures}`)
        console.log('================================')

    } catch (err) {
        console.log(err)
    }
}

viewUser()



