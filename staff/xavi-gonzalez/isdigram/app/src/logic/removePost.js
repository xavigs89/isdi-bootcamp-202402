import { validate, errors } from 'com'

function removePost(postId) {
    validate.text(postId, 'postId', true)

    const post = posts.findOne(post => post.id === postId)

    if (!post) throw new Error('post not found')

    if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

    posts.deleteOne(post => post.id === postId)
}

export default removePost