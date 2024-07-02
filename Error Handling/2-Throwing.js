// const json = '{"name": "Yoda", "age": 20 }'
// const json = 'bad json'
const json = '{"name":"Ahmeng"}'

// try {
//     const user = JSON.parse(json)
//     if (!user.name) {
//         throw new SyntaxError("'name', required")
//     }
//     console.log(user.name)
//     console.log(user.age)
// } catch (error) {
//     console.log(`JSON Error ${error.message}`)
// }

try {
    const user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError("'name', required")
    }
    if (!user.age) {
        throw new SyntaxError("'age', required")
    }
    console.log(user.name)
    console.log(user.age)
} catch(error) {
    if(error instanceof SyntaxError){
        console.log(`Invalid Data ${error.message}`)
    }else if(error instanceof ReferenceError){
        console.log(`ReferenceError ${error.message}`)
    }else{
        console.log(error.stack)
    }
}