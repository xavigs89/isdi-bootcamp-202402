//@ts-nocheck
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect, use } from 'chai'
import { errors } from 'com'
// import chaiAsPromised from 'chai-as-promised'

dotenv.config()

// use(chaiAsPromised)


import { User, Meeting } from '../data/index.ts'

describe('removeMeeting', () => {
    let meetingId: string

    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('removes a meeting from existing user', () =>
        User.deleteMany()
            .then(() =>
                Meeting.deleteMany()
                    .then(() =>
                        User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123' })
                            .then(user =>
                                Meeting.create({ author: user.id, title: 'My Event', address: 'Calle falsa 1,2,3', location: [41.93584282753891, 1.7719600329709349], date: '2024-02-15', time: '21:30', description: 'We are gonna have some fun', image: 'http://images.com' })
                                    .then(meeting => {
                                        meetingId = meeting.id;
                                        return logic.removeMeeting(meeting.id, user.id);
                                    })
                                    .then(() => Meeting.find({})) // Mueve Meeting.find() dentro de la cadena de promesas
                                    .then(meeting => { // Añade una función de flecha para el argumento de then
                                        expect(meeting).to.deep.equal([]);
                                    })
                            )
                    )
            )
    );
});







// it('throws an error when meeting does not exist', () =>
//     logic.removeMeeting('nonexistentMeetingId')
//         .catch(error => {
//             expect(error).to.be.instanceOf(errors.NotFoundError)
//             expect(error.message).to.equal('Meeting not found')
//         })
// )

// it('throws an error when meeting does not belong to user', () =>
//     User.deleteMany()
//         .then(() =>
//             Meeting.deleteMany()
//                 .then(() =>
//                     User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123' })
//                         .then(user =>
//                             logic.createMeeting(user.id, 'My Event', 'Calle falsa 1,2,3', [41.93584282753891, 1.7719600329709349], '2024-02-15', '21:30', 'We are gonna have some fun', 'http://images.com')
//                                 .then(() =>
//                                     User.create({ name: 'Another User', email: 'another@gmail.com', password: '123qwe123' })
//                                         .then(anotherUser =>
//                                             logic.removeMeeting(meetingId)
//                                                 .catch(error => {
//                                                     expect(error).to.be.instanceOf(errors.NotFoundError)
//                                                     expect(error.message).to.equal('Meeting does not belong to user')
//                                                 })
//                                         )
//                                 )
//                         )
//                 )
//         )
// )
// })