import { errors } from 'com'

function retrievePosts() {
    return fetch('http://localhost:8080/posts', {
        headers: {
            'Authorization': `Bearer ${sessionStorage.token}`
        }
    })
        .then(res => {
            if (res.status === 200)
                return res.json()

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default retrievePosts

//XML HTTP REQUEST ANTIGUO
// var xhr = new XMLHttpRequest

    // xhr.onload = () => {
    //     const { status, responseText: json } = xhr

    //     if (status == 200) {
    //         const posts = JSON.parse(json)

    //         callback(null, posts)

    //         return
    //     } 
    //         const { error, message } = JSON.parse(json)

    //         const constructor = errors[error]

    //         callback(new constructor(message))
    //     } 

    //     xhr.open('GET', `http://localhost:8080/posts`)

    //     xhr.setRequestHeader('Authorization', sessionStorage.userId)
    
    //     xhr.send()