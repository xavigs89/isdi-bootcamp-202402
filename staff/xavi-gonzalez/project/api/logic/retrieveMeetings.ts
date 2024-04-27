//@ts-nocheck
import { ObjectId } from 'mongoose'

import { validate, errors } from 'com'

import { User, Meeting } from '../data/index.ts'

const { SystemError, NotFoundError } = errors

function retrieveMeetings(userId): Promise<[{ id: string, author: { id: string, name: string }, title: string, address: string, location: [Number, Number], date: string, description: string, image: string, attendees: [string] }] | { id: string; author: { id: string, name: string; }; title: string; address: string; location: [Number, Number]; date: string; description: string; image: string; attendees: [string]; }[]> {
    validate.text(userId, 'userId', true)


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            return Meeting.find()<{ author: { _id: ObjectId, name: string } }>('author', 'name').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(meetings =>
                    meetings.map<{ id: string, author: { id: string, name: string }, title: string, address: string, location: [Number, Number], date: string, description: string, image: string, attendees: [string] }>(({ _id, author, title, address, location, date, description, image, attendees }) => ({
                        id: _id.toString(),
                        author: {
                            id: author._id.toString(), 
                            name: author.name
                        },
                        title,
                        address,
                        location,
                        date: date.toString(),
                        description,
                        image,
                        attendees,
                    }))
                )
        })
}

export default retrieveMeetings