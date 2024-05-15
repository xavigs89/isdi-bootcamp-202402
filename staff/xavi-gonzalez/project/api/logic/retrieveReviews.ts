//@ts-nocheck
import { ObjectId, Schema } from 'mongoose'
const { Types: { ObjectId } } = Schema
import { User, Meeting, Review } from '../data/index.ts'

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors


function retrieveReviews(userId: string): Promise<any> {
    validate.text(userId, 'userId', true)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Review.find().lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(reviews =>
                    reviews.map(({ _id, author, rate, comment, date, meeting }) => ({
                        id: _id.toString(),
                        author,
                        rate,
                        comment: comment.trim(),
                        date,
                        meeting
                    }))
                )
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default retrieveReviews