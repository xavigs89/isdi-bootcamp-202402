import { validate, errors } from 'com'

function removePost(postId) {

    validate.text(postId, 'postId', true)

    //TODO

        var xhr = new XMLHttpRequest

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status >= 200) {
                callback(null)

                return
            } 

            const { error, message } = JSON.parse(json)
    
            const constructor = errors[error]
    
            callback(new constructor(message))
        }

        xhr.open('DELETE', 'http://localhost:8080/posts/${postId}')

        xhr.setRequestHeader('Authorization', sessionStorage.userId)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.send(json)


    // posts.findOne(post => post.id === postId)

    // if (!post) throw new Error('post not found')

    // if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

    //osts.deleteOne(post => post.id === postId)
}

export default removePost