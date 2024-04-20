//VERSION COMPILADA

function buildErrorClass(name) {
    return class extends Error {
        constructor(message) {
            super(message);
            this.name = name;
        }
        // @ts-ignore
        static get name() {
            return name;
        }
    };
}
const ContentError = buildErrorClass('ContentError');
const SystemError = buildErrorClass('SystemError');
const DuplicityError = buildErrorClass('DuplicityError');
const CredentialsError = buildErrorClass('CredentialsError');
const NotFoundError = buildErrorClass('NotFoundError');
const UnauthorizedError = buildErrorClass('UnauthorizedError');

const errors = {
    ContentError,
    SystemError,
    DuplicityError,
    CredentialsError,
    NotFoundError,
    UnauthorizedError
};

export { ContentError, SystemError, DuplicityError, CredentialsError, NotFoundError };

export default errors;



//VERSION SIN COMPILAR
// class ContentError extends Error {
//     constructor(message) {
//         super(message);
//         //this.name = ContentError.name
//         this.name = this.constructor.name;
//     }
// }
// class SystemError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }
// class DuplicityError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }
// class CredentialsError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }
// class NotFoundError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }