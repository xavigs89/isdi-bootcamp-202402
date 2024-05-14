import { validate, errors } from 'com'
import { Review } from '../data/index.ts'

const { NotFoundError, SystemError } = errors

function retrieveReviewsById(meetingId: string): Promise<any> {
    validate.text(meetingId, 'meetingId', true)

    return Review.findById(meetingId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(reviews =>
            reviews.map(({ _id, rate, comment, date, meeting }) => ({
                id: _id.toString(),
                rate,
                comment: comment.trim(),
                date,
                meeting
            }))
        )
        .catch(error => { throw new SystemError(error.message) })
}

export default retrieveReviewsById