import { logger } from '../utils'


import logic from '../logic'
import SubmitButton from './library/SubmitButton'
import CancelButton from './library/CancelButton'

import { useContext } from '../context'

function CreateMeeting({onMeetingCreated, onCancelClick}) {
    
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        
        event.preventDefault()

        // const userId = logic.retrieveUser(userId)

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

        try {
            logic.createMeeting(title, address, location, date, description, image)
                .then(() => {
                    form.reset()

                    onMeetingCreated()
                })
                .catch(error => alert(error, 'error'))
        } catch (error) {
            alert(error)
        }
    }

    const handleCancelClick = () => onCancelClick()

    logger.debug('CreateMeeting -> render')

    return <section className="bg-[#F4C84B] py-8 px-4"
    >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4" >
            <label className="text-lg font-semibold"  >Title</label>
            <input id="title" name="title" type="text" />

            <label className="text-lg font-semibold" >Address</label>
            <input id="address" name="address" type="text" />

            <label className="text-lg font-semibold" >Location</label>
            <input id="location" name="location" type="text" />

            <label className="text-lg font-semibold" >Date</label>
            <input id="date" name="date" type="datetime-local" min={Date.now()} />

            <label className="text-lg font-semibold" >Description</label>
            <input id="description" name="description" type="text" />

            <label className="text-lg font-semibold" >Image</label>
            <input id="image" name="image" type="url" />

            <SubmitButton type="submit" className="text-lg font-semibold" >Create Meeting</SubmitButton>
        </form>

        <CancelButton onClick={handleCancelClick} />

    </section>


}

export default CreateMeeting
