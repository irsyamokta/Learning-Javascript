class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

function validationNumberInput(a, b, c) {
    if (typeof(a) !== 'number') {
        throw new ValidationError("Argumen Pertama Harus Number")
    } else if (typeof(b) !== 'number') {
        throw new ValidationError("Argumen Kedua Harus Number")
    } else if (typeof(c) !== 'number') {
        throw new ValidationError("Argumen Ketiga Harus Number")
    }
}

const detectTriangle = (a, b, c) => {
    try {
        validationNumberInput(a, b, c)
        if (a === b && b === c) {
            return 'Segitiga Sama Sisi'
        }

        if (a === b || a === c || b === c) {
            return 'Segitiga Sama Kaki'
        }

        return 'Segitiga Sembarang'
    } catch (error) {
        return error.message
    }
}

console.log(detectTriangle(null, 4, null))