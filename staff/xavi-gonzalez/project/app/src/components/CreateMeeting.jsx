//@ts-nocheck
import { logger } from '../utils'


import logic from '../logic'
import SubmitButton from './library/SubmitButton'
import CancelButton from './library/CancelButton'

import { useContext } from '../context'

function CreateMeeting({ onMeetingCreated, onCancelClick, }) {

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
                .catch(error => showFeedback(error))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => onCancelClick()

    logger.debug('CreateMeeting -> render')

    return <section className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-20 py-8 px-4 border-rounded xl">
        <div className='border p-10 rounded-xl bg-[#F4C84B] transition-opacity duration-500 opacity-100'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center" >
                <label className="text-lg font-semibold"  >Title</label>
                <input id="title" name="title" type="text" />

                <label className="text-lg font-semibold " >Address</label>
                <input id="address" name="address" type="text" />

                <label className="text-lg font-semibold" >Location</label>
                <input id="location" name="location" type="text" />

                <label className="text-lg font-semibold" >Date</label>
                <input id="date" name="date" type="datetime-local" min={Date.now()} />

                <label className="text-lg font-semibold" >Description</label>
                <input id="description" name="description" type="text" />

                <label className="text-lg font-semibold" >Image</label>
                <input id="image" name="image" type="url" />

                <SubmitButton type="submit" className="font-semibold py-2 px-4 rounded w-full mt-4" >Create Meeting</SubmitButton>

                <CancelButton onClick={handleCancelClick} />

            </form>
        </div>

    </section>


}

export default CreateMeeting
