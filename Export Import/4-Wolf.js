class Wolf{
    constructor(){
        this.stregth = Math.floor(Math.random() * 100)
    }

    voice(){
        return console.log("Auuuu")
    }
}

export {Wolf}