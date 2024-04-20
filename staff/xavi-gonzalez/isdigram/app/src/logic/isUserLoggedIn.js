import { validate } from 'com'

function isUserLoggedIn() {
    try {
        validate.token(sessionStorage.token)

        return !!sessionStorage.token
    } catch (error) {
        return false
    }
}

export default isUserLoggedIn

//verifica si un usuario está autenticado o no en una aplicación web. Intenta validar el token de sesión del usuario y devuelve true si el usuario está autenticado (es decir, si hay un token de sesión almacenado en sessionStorage), y false si no lo está o si se produce algún error durante la validación del token.