import mongoose from 'mongoose'
import { validate, errors } from 'com'
import { User, Meeting, Review } from '../data/index.ts'

import { NotFoundError, SystemError } from "com/errors"

function createReview(userId: string, rate: number, comment: string): Promise<void> {

    validate.text(userId, 'userId', true)
    validate.rating(rate, 'rating')
    if(comment)
        validate.text(comment, 'comment')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if(!user)
                throw new NotFoundError('user not found')

            const review = {
                author: user._id,
                rate,
                comment: comment.trim(),
                date: new Date
            }

            return Review.create(review)
                .catch((error) => { throw new Error (error.message) })

                .then(review => { })
        })
}

export default createReview