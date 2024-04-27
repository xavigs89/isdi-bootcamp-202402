//@ts-nocheck
import { validate, errors } from 'com'
import { Meeting } from '../data/index.ts'


const { SystemError, NotFoundError } = errors

function removeMeeting(meetingId: string): Promise<void> {
    validate.text(meetingId, 'meetingId', true)

    return Meeting.findOne({ _id: meetingId })
        .catch(error => { throw new SystemError(error.message) })
        .then(meeting => {
            if (!meeting)
                throw new NotFoundError('meeting not found')
            // if (meeting.author !== sessionStorage.userId) 
            //     throw new NotFoundError ('meeting does not belong to user')


            return Meeting.deleteOne({ _id: meetingId })
                .catch(error => { throw new SystemError(error.message) })
        })
}
export default removeMeeting


    // const meeting = meetings.findOne(meeting => meeting.id === meetingId)

    // meetings.deleteOne(meeting => meeting.id === meetingId)


    