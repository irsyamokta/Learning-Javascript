function Mahasiswa(nama, kelas, nim){
    this.nama = nama
    this.kelas = kelas
    this.nim = nim
}

Mahasiswa.prototype.perkenalan = function(){
    return console.log(`Hallo Saya ${this.nama}, dari kelas ${this.kelas} dengan NIM ${this.nim}`)
}
 
Mahasiswa.prototype.belajar = function(jam){
    return console.log(`${this.nama}, belajar sebanyak ${jam} jam`)
}

let abdul = new Mahasiswa("Abdul Karim", "SI06A", "2211103003")
let arin = new Mahasiswa("Arina Hutagaol", "SI06B", "2211103004")

arin.perkenalan()
abdul.belajar(10)


