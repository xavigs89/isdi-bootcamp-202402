//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'
import CancelButton from './library/CancelButton'
import SubmitButton from './library/SubmitButton'

import { useContext } from '../context'

function EditAbout({ about, onAboutEdited, onCancelClick }) {

    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const description = form.description.value

        logger.debug('EditAbout -> handleSubmit')

        try {
            logic.editAbout(description)
                .then(() => {
                    form.reset()

                    onAboutEdited()
                })
                .catch(error => showFeedback(error), 'error')
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => onCancelClick()

    logger.debug('EditAbout -> render')

    return <section className="edit-about ">

        <form onSubmit={handleSubmit} className="flex flex-col space-y-2" >
            <label className="text-lg font-semibold" >About Me</label>
            <input id="description" defaultValue={about} name="description" type="text" />

            <SubmitButton type="submit" className="text-lg font-semibold" >Save Changes</SubmitButton>

            <CancelButton onClick={handleCancelClick} />
        </form>

    </section>
}

export default EditAbout