import { logger } from '../utils'

import logic from '../logic'
import SubmitButton from './library/SubmitButton'
import CancelButton from './library/CancelButton'

import StarRating from './StarRating'

import { useContext } from '../context'
import { useState } from 'react'

function CreateReview({ user, meeting, onReviewCreated, onCancelClick }) {

    const [rate, setRate] = useState(0)
    const { showFeedback } = useContext()

    

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target
 
        // const rate = form.rate.value
        const comment = form.comment.value

        console.log(rate)
        console.log(comment)

        try {
            logic.createReview(user.id, rate, comment, meeting.id)
                .then(() => {
                    form.reset()
                    setRate(0)
                    onReviewCreated()
                })
                .catch(error => showFeedback(error))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => onCancelClick()

    logger.debug('CreateReview -> render')

    return <section className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-70 py-8 px-4 border-rounded xl">

        <div className='border p-4 rounded-xl bg-[#249D8C] transition-opacity duration-500 opacity-100'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center" >
                <label className="text-lg font-semibold text-white" >Rate</label>
                {/* <input id="comment" name="comment" type="text"/> */}
                <StarRating value={rate} setRate={setRate} />

                <label className="text-lg font-semibold text-white" >Comment</label>
                <input id="comment" name="comment" type="text" placeholder="(Optional)"  />

                <SubmitButton type="submit" className="font-semibold py-2 px-4 rounded w-full mt-4" >Create Review</SubmitButton>

                <CancelButton onClick={handleCancelClick} />

            </form>
        </div>

    </section>
}

export default CreateReview