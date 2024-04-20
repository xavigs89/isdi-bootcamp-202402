import { validate, errors } from 'com'

function registerUser(name, birthdate, email, username, password) {
    validate.text(name, 'name')
    validate.date(birthdate, 'birthdate')
    validate.email(email)
    validate.text(username, 'username', true)
    validate.password(password)

// PARA LLAMAR A UNA API DESDE JAVASCRIPT:
//USANDO FETCH (LO NUEVO):
const user = { name, birthdate, email, username, password }

const json = JSON.stringify(user)

return fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: json
})

    .then(res => {
        if (res.status === 201) return

        return res.json()
            .then(body => {
                const { error, message } = body

                const constructor = errors[error]

                throw new constructor(message)
            })
    })

}

export default registerUser



//USANDO XMLHttpRequest
//     var xhr = new XMLHttpRequest

//     xhr.onload = () => {
//         const { status, responseText: json } = xhr

//         if (status !== 201) {
//             callback(null)
            
//             return
//         }

//             const { error, message } = JSON.parse(json)

//             const constructor = errors[error]

//             callback(new constructor(message))
//     }


//     xhr.open('POST', 'http://localhost:8080/users')

//     xhr.setRequestHeader('Content-Type', 'application/json')

//     const user = { name, birthdate, email, username, password }

//     const json = JSON.stringify(user)

//     xhr.send(json)
// }