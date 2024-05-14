//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'
import CancelButton from './library/CancelButton'
import SubmitButton from './library/SubmitButton'

import { useContext } from '../context'
import { useState } from 'react'

function EditAbout({ user, onAboutEdited, onCancelClick }) {

    const { showFeedback } = useContext()
    // const [description, setDescription] = useState(about)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const description = form.description.value

        logger.debug('EditAbout -> handleSubmit')

        try {
            logic.editAbout(user.id, description)
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

    return <section className="edit-about">

        <form onSubmit={handleSubmit} className='border p-4 rounded-xl bg-[#F4C84B] transition-opacity duration-500 opacity-100' >
            <label className="text-lg font-semibold" >About Me</label>
            <input id="description" defaultValue={user.about.description} name="description" type="text" />

            <SubmitButton type="submit" className="text-lg font-semibold">Save Changes</SubmitButton>

            <CancelButton onClick={handleCancelClick} />
        </form>

    </section>
}

export default EditAbout