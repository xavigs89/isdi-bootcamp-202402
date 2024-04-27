import { validate, errors } from 'com'

function createMeeting(userId,title,address,location,date,time,description,image) {
    validate.text(userId, 'userId', true)
    validate.text(title, 'title')
    validate.text(address, 'address')
    validate.coords(location, 'coords')
    // validate.number(location[0], 'coord1')
    // validate.number(location[1], 'coord2')
    validate.date(date, 'date')
    validate.text(time, 'time')
    validate.text(description, 'description')
    validate.url(image, 'image')

    validate.token(sessionStorage.token)

    const meeting = { title,address,location,date,time,description,image, }

    const json = JSON.stringify(user)

    return fetch(`${import.meta.env.VITE_API_URL}/meetings`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: json
    })
        .then(res => {
            if (res.status === 201) return

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default createMeeting