//@ts-nocheck
import { useState, useEffect } from 'react'
import { logger } from '../utils'

import { useContext } from '../context'
import getLoggedInUserId from '../logic/getLoggedInUserId'
import StarRating from './StarRating'

import moment from 'moment'

function Review({ review }) {

    const { showFeedback, showConfirm, setStamp } = useContext()

    logger.debug('Review -> render')


    return <article className="text-wrap max-w-sm mx-4 overflow-auto flex p-1 border rounded-xl shadow-md bg-white mt-4">

        <div className="col-span-1 pr-4 text-black font-semibold">

            <p className="text-left font-semibold mbp text-xs">
                {review.author.name}</p>

                <StarRating value={review.rate} />

            <p><strong>Comment: </strong>{review.comment}</p>

            <time>{moment(review.date).format('Do MMMM YYYY, h:mm a')}</time>

        </div>

    </article>

}
export default Review