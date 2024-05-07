//@ts-nocheck
// import dotenv from 'dotenv'
import mongoose from "mongoose"
import { User, Meeting } from '../data/index.ts'
import { expect } from 'chai'
import logic from "./index.ts"

describe('unjoinMeeting', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('should remove userId from meeting attendees', () =>
        Promise.all([
            User.deleteMany({}),
            Meeting.deleteMany({})
        ])
            .then(() =>
                Promise.all([
                    User.create({ name: 'Xavi Gonzalez', email: 'xavi@gmail.com', password: '123qwe123', avatar: null, about: null }),
                    User.create({ name: 'Perico de los Palotes', email: 'perico@gmail.com', password: 'Isdicoders1', avatar: null, about: null }),
                    User.create({ name: 'Armando Guerra', email: 'armando@gmail.com', password: 'Isdicoders1', avatar: null, about: null }),
                ])
            )
            .then(([user1, user2]) =>

                Meeting.create({ author: user1._id, title: 'My Event', address: 'Calle falsa 1,2,3', location: [41.93584282753891, 1.7719600329709349], date: new Date(2024, 1, 15), description: 'We are gonna have some fun', image: 'http://images.com', attendees: [user1.id, user2.id] })
                    .then(meeting => {
                        console.log(meeting)
                        debugger
                        return logic.unjoinMeeting(user2.id, meeting.id)
                            .then(() => Meeting.findOne({ title: 'My Event' }))
                            .then(updatedMeeting => {
                                expect(!!updatedMeeting).to.be.true
                                console.log('updated', updatedMeeting);

                            })
                    })
            )
    )

    after(() => mongoose.disconnect())
})