import { logger } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

import { useContext } from '../context'

function Post({ item: post, onEditClick, onDeleted }) {
    const { showFeedback, showConfirm } = useContext()

    const handleDeleteClick = postId =>
        showConfirm('delete post?', confirmed => {
            if (confirmed)
                try {
                    logic.removePost(postId)
                        .then(() => onDeleted())
                        .catch(error => showFeedback(error, 'error'))
                } catch (error) {
                    showFeedback(error)
                }
        })

    const handleEditClick = post => onEditClick(post)

    logger.debug('Post -> render')

    return <article>
        <h3><Link to={`/profile/${post.author.username}`}>{post.author.username}</Link></h3>

        <img src={post.image} />

        <p>{post.text}</p>

        <time>{new Date(post.date).toLocaleString('en-CA')}</time>

        {logic.getLoggedInUserId() === post.author.id && <>
            <button onClick={() => handleEditClick(post)}>📝</button>
            <button onClick={() => handleDeleteClick(post.id)}>🗑️</button>
        </>}
    </article>
}

export default Post