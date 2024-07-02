//const {Mahasiswa, apakahMahasiswa} =  require('./1-State') //Native

import { Mahasiswa, apakahMahasiswa } from "./1-State.js" // ES6
import {Tiger} from "./3-Tiger.js"
import {Wolf} from "./4-Wolf.js"

console.log(Mahasiswa.nama)
console.log(apakahMahasiswa)

const tiger = new Tiger

tiger.voice()