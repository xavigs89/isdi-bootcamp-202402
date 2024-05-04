import mongoose from 'mongoose'

import { validate, errors } from "com"
import { User, Meeting } from "../data/index.ts"
import { DuplicityError } from "com/errors"

const { NotFoundError, SystemError } = errors

function joinMeeting(meetingId: string, userId: string) {
    validate.text(userId, 'userId', true)
    validate.text(meetingId, 'meetingId', true)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Meeting.findById(meetingId)
                .catch(error => { throw new SystemError(error.message) })
                .then(meeting => {
                    if (!meeting) throw new NotFoundError('meeting not found')
                    // if (meeting.attendees.includes(userId)) throw new DuplicityError('user already exists')

                    return Meeting.updateOne({ _id: meetingId }, { $push: { attendees: userId } })
                })
        })

}


export default joinMeeting
