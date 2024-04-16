import { validate, errors } from 'com'

function createPost(image, text) {
    validate.url(image, 'image')
    if (text)
        validate.text(text, 'text')

// FETCH NUEVO
    const post = { image, text }

    const json = JSON.stringify(post)

    return fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: json
    })
        .then(res => {
            if(res.status === 201) return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors [error]

                    throw new constructor (message)
                })
        })      
}

export default createPost


//XML HTTP REQUEST ANTIGUO
// var xhr = new XMLHttpRequest

        // xhr.onload = () => {
        //     const { status, responseText: json } = xhr

        //     if (status >= 201) {
        //         callback(null)

        //         return
        //     } 
            
        //     const { error, message } = JSON.parse(json)
    
        //     const constructor = errors[error]
    
        //     callback(new constructor(message))
        // } 

        // xhr.open('POST', 'http://localhost:8080/posts')

        // xhr.setRequestHeader('Authorization', sessionStorage.userId)
        // xhr.setRequestHeader('Content-Type', 'application/json')
    
        // const post = { image, text }
    
        // const json = JSON.stringify(post)
    
        // xhr.send(json)