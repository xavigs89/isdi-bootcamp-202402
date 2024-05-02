//@ts-nocheck

import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { expect } from 'chai'
import { errors } from 'com'

import logic from './index.ts'
import { User, Meeting } from '../data/index.ts'

dotenv.config()

const { SystemError, NotFoundError } = errors

describe('modifyMeeting', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    let userId
    let meetingId

    beforeEach(() => {
        return Promise.all([
            User.deleteMany(),
            Meeting.deleteMany()
        ])
        .then(() => User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123', avatar: null, about: null }))
        .then(user => {
            userId = user.id
            return Meeting.create({ author: user.id, title: 'My Event', address: 'Calle falsa 1,2,3', location: [41.93584282753891, 1.7719600329709349], date: '2024-02-15', description: 'We are gonna have some fun', image: 'http://images.com' })
        })
        .then(meeting => {
            meetingId = meeting.id
        })
    })

    it('modifies a meeting with valid data', () => {
        const updatedTitle = 'Updated Event Title'
        const updatedAddress = 'Updated Address'
        const updatedLocation = [42.0, 2.0]
        const updatedDate = '2024-03-15'
        const updatedDescription = 'Updated description'
        const updatedImage = 'http://updated-image.com'

        return logic.modifyMeeting(meetingId, userId, updatedTitle, updatedAddress, updatedLocation, updatedDate, updatedDescription, updatedImage)
            .then(() => Meeting.findById(meetingId))
            .then(updatedMeeting => {
                expect(updatedMeeting).to.exist
                expect(updatedMeeting.title).to.equal(updatedTitle)
                expect(updatedMeeting.address).to.equal(updatedAddress)
                expect(updatedMeeting.location).to.deep.equal(updatedLocation)
                expect(updatedMeeting.date).to.deep.equal(new Date(updatedDate))
                expect(updatedMeeting.description).to.equal(updatedDescription)
                expect(updatedMeeting.image).to.equal(updatedImage)
            })
    })

    // TODO ERROR CASES

    after(() => mongoose.disconnect())
})