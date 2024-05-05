import { logger } from '../utils'

import logic from '../logic'
import CancelButton from './library/CancelButton'
import SubmitButton from './library/SubmitButton'

import { useContext } from '../context'

function EditMeeting({meeting, onMeetingEdited, onCancelClick}) {

    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        // const author = form.author.value
        const title = form.title.value
        const address = form.address.value
        const locationStr = form.location.value.split(",")
        const location = locationStr.map(str => {
            return Number(str)
        })
        const date = form.date.value
        const description = form.description.value
        const image = form.image.value

        logger.debug('EditMeeting -> handleSubmit')

        try {
            logic.editMeeting(meeting.id, title, address, location, date, description, image)
                .then(() => {
                    form.reset()

                    onMeetingEdited()
                })
                .catch(error => showFeedback(error), 'error')
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => onCancelClick()

    logger.debug('EditMeeting -> render')

    return <section className="edit-meeting bg-[#F4C84B] py-8 px-4"
    >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2" >
            <label className="text-lg font-semibold"  >Title</label>
            <input id="title" defaultValue={meeting.title} name="title" type="text" />

            <label className="text-lg font-semibold" >Address</label>
            <input id="address" defaultValue={meeting.address}  name="address" type="text" />

            <label className="text-lg font-semibold" >Location</label>
            <input id="location" defaultValue={meeting.location} name="location" type="text" />

            <label className="text-lg font-semibold" >Date</label>
            <input id="date" defaultValue={meeting.date ? new Date(meeting.date).toISOString().slice(0, 16) : ''} name="date" type="datetime-local" min={Date.now()} />

            <label className="text-lg font-semibold" >Description</label>
            <input id="description" defaultValue={meeting.description} name="description" type="text" />

            <label className="text-lg font-semibold" >Image</label>
            <input id="image" defaultValue={meeting.image} name="image" type="url" />

            <SubmitButton type="submit" className="text-lg font-semibold" >Save Changes</SubmitButton>
        </form>

        <CancelButton onClick={handleCancelClick} />

    </section>
}

export default EditMeeting