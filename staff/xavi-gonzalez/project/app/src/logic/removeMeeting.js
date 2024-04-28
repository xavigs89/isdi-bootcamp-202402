import { validate, errors } from 'com'

function removeMeeting(meetingId) {
    validate.text(meetingId, 'meetingId', true)

    return fetch(`${import.meta.env.VITE_API_URL}/meetings`, {

        method: 'DELETE',
})



}


export default removeMeeting