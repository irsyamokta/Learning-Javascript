// Andi memiliki target untuk menabung setidaknya Rp. 1.000.000 setiap bulan. Setiap kali Andi melakukan pengeluaran, dia ingin memasukkan jumlah pengeluaran tersebut ke dalam program dan melihat berapa jumlah tabungan yang tersisa. Jika jumlah tabungan yang tersisa sudah mencapai target atau lebih, maka program harus memberi tahu Andi bahwa dia telah memenuhi targetnya. Jika belum, program harus memberi tahu Andi berapa jumlah yang masih kurang untuk mencapai targetnya.

const target = 1000000
let tabunganSekarang = 1500000

function tabungan(pengeluaran, pemasukan){
    tabunganSekarang = tabunganSekarang - pengeluaran
    
    tambahTabungan(pemasukan)

    if(tabunganSekarang == target || tabunganSekarang > target){
        return console.log(`Telah memenuhi target, tabungan sekarang ${tabunganSekarang}`)
    } else {
        tabunganSekarang = tabunganSekarang - target
        return console.log(`Masih kurang ${tabunganSekarang}`)
    }
}

function tambahTabungan(pemasukan){
    tabunganSekarang = pemasukan + tabunganSekarang
    return tabunganSekarang
}

tabungan(0, 200000)