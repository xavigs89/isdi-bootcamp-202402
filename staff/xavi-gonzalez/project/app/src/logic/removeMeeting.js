import { validate, errors } from 'com';

function removeMeeting(meetingId) {
    validate.text(meetingId, 'meetingId', true)
    validate.token(sessionStorage.token)

    const json = JSON.stringify(meeting)

    const [,payloadB64] = sessionStorage.token.split('.')

    const payloadJSON = atob(payloadB64)

    const payload = JSON.parse(payloadJSON)

    const { sub: userId } = payload

    return fetch(`${import.meta.env.VITE_API_URL}/meetings/${meetingId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(res => {
        if (res.status === 204)

        return res.json()
            .then(body => {
                const { error, message } = body

                const constructor = errors[error]

                throw new constructor(message)
            })
})
}

export default removeMeeting;