class Developer {
    constructor(name) {
        this.name = name
    }

    commitChange() {
        console.log(`${this.name} melakukan perubahan kode`)
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} membuat UI`)
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} membuat API`)
        }
    }
}

function canDeployAPP(developer) {
    return {
        deployAPP: () => {
            console.log(`${developer.name} deploy APP`)
        }
    }
}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildUI(developer))
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildAPI(developer))
}

function createDevOpsDeveloper(name){
    const developer = new Developer(name)
    return Object.assign(developer, canDeployAPP(developer))
}

function createFullStackDeveloper(name){
    const developer = new Developer(name)
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployAPP(developer))
}

// const frontEndDeveloper = createFrontEndDeveloper("Irsyam")
// frontEndDeveloper.commitChange()
// frontEndDeveloper.buildUI()

const fullStackDeveloper = createFullStackDeveloper("Irsyam")
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployAPP();
console.log(`is ${fullStackDeveloper.name} developer? `,fullStackDeveloper instanceof Developer);
 