function perkalian(a, b){
    return a * b
}

console.log(perkalian(3,5))

// Object Parameter

const cat = {
    id: 1,
    name: "Kitty",
    color: "Orange"   
}

function showCat({id, name, color}){
    return console.log(`${id} is ${name} with color ${color}`)
}
showCat(cat)

// Rest Parameter

function penjumlahan(...number){
    let hasil = 0
    for(let angka of number){
        hasil += angka
    }
    return hasil
}

console.log(penjumlahan(1,2,6))