import { logger, showFeedback} from '../utils'

import CancelButton from './library/CancelButton'

import logic from '../logic'
import SubmitButton from './library/SubmitButton'

import './CreatePost.sass'

function CreatePost(props) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text, error => {
                if (error) {
                    showFeedback(error)

                    return
                }

                form.reset()

                props.onPostCreated()
            })
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => props.onCancelClick()

        logger.debug('CreatePost -> render')

        return <section className="create-post">
            <form onSubmit={handleSubmit}>
                
                <label>Image Link</label>
                <input id="image" type="text" />

                <label>Text</label>
                <input id="text" type="text" />

                <SubmitButton>Create Post</SubmitButton>
            </form>

            <CancelButton onClick={handleCancelClick} />
        </section>
    }

export default CreatePost