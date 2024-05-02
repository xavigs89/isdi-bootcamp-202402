import { validate, errors } from 'com'
import { User, Meeting } from '../data/index.ts'
import mongoose from 'mongoose'

const { SystemError, NotFoundError } = errors

function modifyMeeting(meetingId: string, userId: string, title: string, address: string, location: [number, number], date: string, description: string, image: string):Promise<any> {

    validate.text(userId, 'userId', true)
    validate.text(title, 'title')
    validate.text(address.trim(), 'address')
    validate.coords(location, 'coords')
    validate.text(date, 'date')
    validate.text(description, 'description')
    validate.url(image, 'image')

    return Meeting.updateOne({ _id: meetingId, author: userId }, {

        $set: {
            title,
            address,
            location,
            date: new Date(date),
            description,
            image
        }
    })
    .catch(error => { throw new SystemError(error.message) })

}

export default modifyMeeting