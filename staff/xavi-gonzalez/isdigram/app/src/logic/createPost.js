import { validate, errors } from 'com'

function createPost(image, text) {
    validate.url(image, 'image')
    if (text)
        validate.text(text, 'text')
        validate.token(sessionStorage.token)

// FETCH NUEVO
    const post = { image, text }

    const json = JSON.stringify(post)

    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: json
    })

    //Se utiliza la función fetch para realizar una solicitud HTTP POST a una URL construida dinámicamente utilizando el valor de la variable de entorno VITE_API_URL, que parece estar disponible en el entorno de navegador a través de import.meta.env. La parte /posts de la URL sugiere que se está accediendo a un endpoint para crear nuevos posts en una API.
    
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