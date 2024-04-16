import { errors } from 'com'

function retrieveUser() {
    //FECTH
    const [, payloadB64] = sessionStorage.token.split('.')

    const payloadJSON = atob(payloadB64)

    const payload = JSON.parse(payloadJSON)

    const { sub: userId } = payload

    return fetch(`http://localhost:8080/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .then(res => {
            if (res.status  === 200)
                return res.json()

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default retrieveUser


//VERSION ANTIGUA XMLHTTPREQUEST

    // var xhr = new XMLHttpRequest
    //     xhr.onload = () => {
    //         const { status, responseText: json } = xhr

    //         if (status == 200) {
    //             const user = JSON.parse(json)

    //             callback(null, user)

    //             return
    //         } 
    //             const { error, message } = JSON.parse(json)

    //             const constructor = errors[error]

    //             callback(new constructor(message))
    //     } 

    //     xhr.open('GET', `http://localhost:8080/users/${sessionStorage.userId}`)

    //     xhr.setRequestHeader('Authorization', sessionStorage.userId)

    //     xhr.send()