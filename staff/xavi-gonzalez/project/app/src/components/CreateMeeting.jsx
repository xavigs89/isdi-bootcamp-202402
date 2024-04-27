import { logger } from '../utils'


import logic from '../logic'
import SubmitButton from './library/SubmitButton'

import { useContext } from '../context'

function CreateMeeting(props) {

    const handleSubmit = event => {
        event.preventDefault()
        const userId = logic.retrieveUser(userId)

        const form = event.target

        const title = form.title.value
        const address = form.address.value
        const location = form.location.value
        const date = form.date.value
        const time = form.time.value
        const description = form.description.value
        const image = form.image.value

        try {
            logic.createMeeting(userId,title, address, location, date, time, description, image)
                .then(() => {
                    form.reset()

                    props.onMeetingCreated()
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => props.onCancelClick()

    logger.debug('CreateMeeting -> render')

    return <section
    >
        <form onSubmit={handleSubmit} className="flex flex-col" >
            <label>Title</label>
            <input id="title" type="text" />

            <label>Address</label>
            <input id="address" type="text" />

            <label>Location</label>
            <input id="location" type="number" />

            <label>Date</label>
            <input id="date" type="date" />

            <label>Time</label>
            <input id="time" type="text" />

            <label>Description</label>
            <input id="description" type="text" />

            <label>Image</label>
            <input id="image" type="image" />

            <SubmitButton>Create Meeting</SubmitButton>
        </form>

        <CancelButton onClick={handleCancelClick} />

    </section>


}

export default CreateMeeting
