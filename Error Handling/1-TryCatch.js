try{
    console.log("Ini Tidak Error")
    errorCode
}catch(error){
    console.log(error.name)
}finally{
    console.log("Masih tetap berjalan")
}