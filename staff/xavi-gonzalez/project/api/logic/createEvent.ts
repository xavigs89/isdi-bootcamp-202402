import { validate, errors } from 'com'
import { User, Event } from '../data/index.ts'

import { ObjectId } from 'mongoose'

const { SystemError, NotFoundError } = errors

function createEvent(userId: string, title: string, address: string, location: [Number, Number], date: string, time: string, description: string, image: string): Promise<void> {
    validate.text(userId, 'userId', true)
    validate.text(title, 'title')
    validate.text(address, 'address')
    validate.number(location[0], 'coord1')
    validate.number(location[1], 'coord2')
    validate.text(date, 'date')
    validate.text(time, 'time')
    validate.text(description, 'description')
    validate.url(image, 'image')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')
            const formattedDate = new Date(date)

            return Event.create({
                author: user.id,
                title,
                address,
                location,
                date,
                time,
                description,
                image,
                attendees: [this.author]
                
            })
            .catch((error) => { throw new Error(error.message) })
            
            .then(event => { })
        })
}



export default createEvent