//@ts-nocheck
import { ObjectId } from 'mongoose'

import { validate, errors } from 'com'

import { User, Meeting } from '../data/index.ts'
import convertAttendeeToName from './convertAttendeeToName.ts';

const { SystemError, NotFoundError } = errors

function retrieveMeetings(userId): Promise<any> {
    validate.text(userId, 'userId', true)


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            return Meeting.find()
                .populate<{ author: { _id: ObjectId, name: string } }>('author', 'name').lean()
                .populate<{ attendees: [{ id: ObjectId, name: string }] }>('attendees', '_id name').lean()
                
                .catch(error => { throw new SystemError(error.message) })
                .then(meetings =>
                    meetings.map<{ id: string, author: { id: string, name: string }, title: string, address: string, location: [Number, Number], date: Date, description: string, image: string, attendees: [{ id: ObjectId, name: string }] }>(({ _id, author, title, address, location, date, description, image, attendees }) => ({
                        id: _id.toString(),
                        author: {
                            id: author._id.toString(),
                            name: author.name
                        },
                        title,
                        address,
                        location,
                        date,
                        description,
                        image,
                        attendees,
                        //ordenar por fecha mas cercana
                    })).sort({ date: 1 })
                )
        })
}

export default retrieveMeetings



// [{ id: string, author: { id: string, name: string }, title: string, address: string, location: [Number, Number], date: Date, description: string, image: string, attendees: [string] }] | { id: string; author: { id: string, name: string; }; title: string; address: string; location: [Number, Number]; date: Date; description: string; image: string; attendees: [string]; }[]