import { validate, errors } from 'com'

function loginUser(username, password, callback) {
    validate.text(username, 'username', true)
    validate.password(password)

 //FECTH

    const user = { username, password }

    const json = JSON.stringify(user)

    return fetch('http://localhost:8080/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })

        .then(res => {
            if (res.status === 200)
                return res.json()
                    .then(token => { sessionStorage.token = token})
            
            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default loginUser

//XMLHTTPREQUEST ANTIGUO

    //var xhr = new XMLHttpRequest
   // xhr.onload = () => {
    //     const { status, responseText: json } = xhr

    //     if (status >= 200) {
    //         const userId = JSON.parse(json)

    //         sessionStorage.userId = userId

    //         callback(null)

    //         return
    //     }

    //     const { errors, message } = JSON.parse(json)

    //     const constructor = errors[error]

    //     callback(new constructor(message))
    // }

    // xhr.open('POST', 'http://localhost:8080/users/auth')

    // xhr.setRequestHeader('Content-Type', 'application/json')

    // const user = { username, password }

    // const json = JSON.stringify(user)

    // xhr.send(json)