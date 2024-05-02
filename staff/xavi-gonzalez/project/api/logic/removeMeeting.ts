//@ts-nocheck
import { validate, errors } from 'com'
import { Meeting, User } from '../data/index.ts'


const { SystemError, NotFoundError } = errors

function removeMeeting(meetingId: string, userId: string): Promise<void> {
    validate.text(meetingId, 'meetingId', true)
    validate.text(userId, 'userId', true)

    return Meeting.findOne({ _id: meetingId })
        .catch(error => { throw new SystemError(error.message) })
        .then(meeting => {
            if (!meeting)
                throw new NotFoundError('meeting not found')            

            User.findById(userId)
                .catch(error => { throw new SystemError(error.message) })
                .then(user => {
                    if (!user)
                        throw new NotFoundError('user does not exist')

                    if (meeting.author !== user._id)
                        throw new NotFoundError('meeting does not belong to user')
                })
            
            return Meeting.deleteOne({ _id: meetingId, author: userId })
                .catch(error => { throw new SystemError(error.message) })
        })
}
export default removeMeeting


// const meeting = meetings.findOne(meeting => meeting.id === meetingId)

// meetings.deleteOne(meeting => meeting.id === meetingId)


