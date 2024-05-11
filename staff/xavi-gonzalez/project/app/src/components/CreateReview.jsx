//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'
import SubmitButton from './library/SubmitButton'
import CancelButton from './library/CancelButton'

import { useContext } from '../context'

function CreateReview({ onReviewCreated, onCancelCick }) {

    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const rate = form.rate.value
        const comment = form.comment.value

        try {
            logic.createReview(rate, comment)
                .then(() => {
                    form.reset()

                    onReviewCreated()
                })
                .catch(error => showFeedback(error))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => onCancelCick()

    logger.debug('CreateReview -> render')

    return <section className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-20 py-8 px-4 border-rounded xl">
        <div className='border p-10 rounded-xl bg-[#F4C84B] transition-opacity duration-500 opacity-100'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center" >
                <label className="text-lg font-semibold" >Rate</label>
                <input id="title" name="title" type="text" />

                <label className="text-lg font-semibold" >Comment</label>
                <input id="comment" name="comment" type="text" />

                <SubmitButton type="submit" className="font-semibold py-2 px-4 rounded w-full mt-4" >Create Review</SubmitButton>

                <CancelButton onClick={handleCancelClick} />

            </form>
        </div>

    </section>
} 

export default CreateReview