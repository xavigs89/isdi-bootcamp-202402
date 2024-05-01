import dotenv from 'dotenv'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

import { User, Meeting } from '../data/index.ts'

dotenv.config()

const { CredentialsError, NotFoundError } = errors

describe('retrieveMeetings', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves all meetings from existing user', () =>
        Promise.all([
            User.deleteMany(),
            Meeting.deleteMany()
        ])

            .then(() =>
                User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123' })
                    .then(user =>
                        Promise.all([
                            Meeting.create({ author: user.id, title: 'My Event', address: 'Calle falsa 1,2,3', location: [41.93584282753891, 1.7719600329709349], date: 15-2-2024, description: 'We are gonna have some fun', image: 'http://images.com' })
                        ])

                            .then(([meeting1]) => 
                                logic.retrieveMeetings(user.id)
                                    .then(meetings => {
                                        console.log(meetings)
                                        expect(meetings).to.have.lengthOf(1)

                                        const meeting1b = meetings.find(meeting => meeting.id === meeting1.id)

                                        expect(meeting1b.author.id).to.equal(user.id)
                                        expect(meeting1b.author.name).to.equal('Paquito Chocolatero')
                                        expect(meeting1b.title).to.equal('My Event')
                                        expect(meeting1b.address).to.equal('Calle falsa 1,2,3')
                                        expect(meeting1b.location).to.deep.equal([41.93584282753891, 1.7719600329709349])

                                        expect(meeting1b.date).to.be.instanceOf(Date)
                                        expect(meeting1b.description).to.equal(meeting1.description)
                                        expect(meeting1b.image).to.equal(meeting1.image)


                                        // const meeting2b = meetings.find(meeting => meeting.id === meeting2.id)

                                        // expect(meeting2b.author.id).to.equal(user.id)
                                        // expect(meeting2b.author.name).to.equal('Paquito Chocolatero')
                                        // expect(meeting2b.title).to.equal('My Event')
                                        // expect(meeting2b.address).to.be('Calle falsa 1,2,3')
                                        // expect(meeting2b.location).to.deep.equal([41.93584282753891, 1.7719600329709349])
                                        // expect(meeting2b).to.equal('2024-02-15')
                                        // expect(meeting2b.date).to.be.instanceOf(Date)
                                        // expect(meeting2b.time).to.be('21:30')
                                        // expect(meeting2b.description).to.equal(meeting2.description)
                                        // expect(meeting2b.image).to.equal(meeting2.image)



                                        // const meeting3b = meetings.find(meeting => meeting.id === meeting3.id)

                                        // expect(meeting3b.author.id).to.equal(user.id)
                                        // expect(meeting3b.author.name).to.equal('Paquito Chocolatero')
                                        // expect(meeting3b.title).to.equal('My Event')
                                        // expect(meeting1b.address).to.be('Calle falsa 1,2,3')
                                        // expect(meeting3b.location).to.deep.equal([41.93584282753891, 1.7719600329709349])
                                        // expect(meeting3b).to.equal('2024-02-15')
                                        // expect(meeting3b.date).to.be.instanceOf(Date)
                                        // expect(meeting3b.time).to.be('21:30')
                                        // expect(meeting3b.description).to.equal(meeting3.description)
                                        // expect(meeting3b.image).to.equal(meeting3.image)
                                    })
                    )
                    )
            )
    )


    after(mongoose.disconnect)
})