class Mahasiswa{
    constructor(nama, nim, kelas){
        this.nama = nama
        this.nim = nim
        this.kelas = kelas
    }

    belajar(jam) {
        return console.log(`${this.nama} belajar sebanyak ${jam} jam hari ini`)
    }
}

let abdul = new Mahasiswa("Abdul Latif", "2211103003", "SI06A")
let ani = new Mahasiswa("Ani Amrullah", "2211103004", "SI06B")

abdul.belajar(10)