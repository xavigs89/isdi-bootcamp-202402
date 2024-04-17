import { logger, showFeedback } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

function Post (props) {
    const handleDeleteClick = postId => {
        if (confirm('delete post?'))
            try {
                logic.removePost(postId)

                props.onDeleted()
            } catch (error) {
                showFeedback(error)
            }
    }

    const handleEditClick = post => props.onEditClick(post)

    logger.debug('Post -> render')

        const { item: post } = props

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