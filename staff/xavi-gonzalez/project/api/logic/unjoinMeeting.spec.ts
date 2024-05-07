//@ts-nocheck
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
            .then(meeting => {
                Promise.all([
                    Event.updateOne({ _id: meeting.id }, { $push: { attendees: user.id } })
                ])
                    .then(() =>
                        logic.unjoinMeeting(user.id, meeting.id)
                            .then(() =>
                                Promise.all([
                                    User.findById(user.id),
                                    meeting.findById(meeting.id)
                                ]))
                            .then(([updatedMeeting]) => {
                                console.log(updatedMeeting)
                                expect(updatedMeeting.attendees).to.have.lengthOf(0)
                            })
                    )
            })
    )


    after(() => mongoose.disconnect())

})
