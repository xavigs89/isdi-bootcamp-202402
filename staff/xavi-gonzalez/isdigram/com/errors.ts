//VERSION MEJORADA Y GENERALIZADA
function buildErrorClass(name) {
    return class extends Error {
        constructor(message) {
            super(message)

            this.name = name
        }
        //@ts-ignore
        static get name() {
            return name
        }
    }
}

//el uso de static aquí significa que el método name pertenece a la clase en sí misma, y no a las instancias individuales de la clase. Esto permite acceder al nombre del error sin necesidad de instanciar la clase.

const ContentError = buildErrorClass('ContentError')
const SystemError = buildErrorClass('SystemError')
const DuplicityError = buildErrorClass('DuplicityError')
const CredentialsError = buildErrorClass('CredentialsError')
const NotFoundError = buildErrorClass('NotFoundError')
const UnauthorizedError = buildErrorClass('UnauthorizedError')


const errors = {
    ContentError,
    SystemError,
    DuplicityError,
    CredentialsError,
    NotFoundError,
    UnauthorizedError
}

export {
    ContentError,
    SystemError,
    DuplicityError,
    CredentialsError,
    NotFoundError,
    UnauthorizedError
}


export default errors



//VERSION ANTIGUA
// class ContentError extends Error {
//     constructor(message) {
//         super(message)

//         //this.name = ContentError.name
//         this.name = this.constructor.name
//     }
// }

// class SystemError extends Error {
//     constructor(message) {
//         super(message)

//         this.name = this.constructor.name
//     }
// }

// class DuplicityError extends Error {
//     constructor(message) {
//         super(message)

//         this.name = this.constructor.name
//     }
// }

// class CredentialsError extends Error {
//     constructor(message) {
//         super(message)

//         this.name = this.constructor.name
//     }
// }

// class NotFoundError extends Error {
//     constructor(message) {
//         super(message)

//         this.name = this.constructor.name
//     }
// }
