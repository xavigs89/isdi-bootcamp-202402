import mongoose from "mongoose"

import { User, Meeting } from '../data/index.ts'

import { expect } from 'chai'

import { errors } from 'com'


// describe('unjoinMeeting', () => {
//     before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

//     it('succeeds when you unjoin a meeting', () => 
//         Promise.all([
//             User.deleteMany({}),
//             Meeting.deleteMany({})
//         ])

//         .then(() => 
//             Promise.all([
//                 User.create({ name: 'Xavi Gonzalez', email: 'xavi@gmail.com', password: '123qwe123', avatar: null, about: null }),
//                 User.create({ name: 'Perico de los Palotes', email: 'perico@gmail.com', password: 'Isdicoders1', avatar: null, about: null }),
//                 User.create({ name: 'Armando Guerra', email: 'armando@gmail.com', password: 'Isdicoders1', avatar: null, about: null }),
//             ])
//         )
//         .then(user => {

//             return Meeting.create({ author: user.id, title: 'My Event', address: 'Calle falsa 1,2,3', location: [41.93584282753891, 1.7719600329709349], date: new Date(2024, 1, 15), description: 'We are gonna have some fun', image: 'http://images.com', attendees: [user.id] })
//         })
//         .then(meeting => 

//             logic.unjoinMeeting(meetingId, userId)
//                 .then(() => Meeting.findById(meetingId))
//                 .then(meeting => {
//                     expect(meeting.attendees).to.not.include(userId)
//                 })
//         )
//     )
// })