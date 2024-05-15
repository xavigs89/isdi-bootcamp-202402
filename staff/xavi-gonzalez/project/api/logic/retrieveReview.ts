//@ts-nocheck
import { ObjectId } from 'mongoose';
import { User, Meeting, Review } from '../data/index.ts';
import { validate, errors } from 'com';

const { NotFoundError, SystemError } = errors;

function retrieveReview(userId: string, meetingId: string): Promise<any> {

    validate.text(userId, 'userId', true);
    validate.text(meetingId, 'meetingId', true);

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Review.findOne({ author: userId, meeting: meetingId }).lean();
        })
        .then(review => {
            if (!review) throw new NotFoundError('review not found for this user and meeting');

            return Review.find({meeting: meetingId}).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(review =>
                    review.map(({ _id, author, rate, comment, date, meeting }) => ({
                        id: _id.toString(),
                        author,
                        rate,
                        comment: comment.trim(),
                        date,
                        meeting
                    }))
                )
        })
        .catch(error => {
            throw new SystemError(error.message)
        })
}

export default retrieveReview