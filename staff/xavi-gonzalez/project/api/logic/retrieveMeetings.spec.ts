//@ts-nocheck
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

import { User, Meeting } from '../data/index.ts'
// import chaiAsPromised from 'chai-as-promised'

dotenv.config()

// use(chaiAsPromised)

const { CredentialsError, NotFoundError, SystemError } = errors

describe('retrieveMeetings', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves all meetings from existing user', () =>
        Promise.all([
            User.deleteMany(),
            Meeting.deleteMany()
        ])

            .then(() =>
                Promise.all([
                    User.create({ name: 'Xavi Gonzalez', email: 'xavi@gmail.com', password: '123qwe123' }),
                    User.create({ name: 'Perico de los Palotes', email: 'perico@gmail.com', password: 'Isdicoders1' }),
                    User.create({ name: 'Armando Guerra', email: 'armando@gmail.com', password: 'Isdicoders1' }),
                ])

                    .then(user =>
                        Promise.all([

                            User.create({ name: 'Mari Juana', email: 'mari@gmail.com', password: '123qwe123' })
                                .then(user =>
                                    Meeting.create({ author: user.id, title: 'My Event', address: 'Calle falsa 1,2,3', location: [41.93584282753891, 1.7719600329709349], date: new Date(2024, 1, 15), description: 'We are gonna have some fun', image: 'http://images.com' })),



                        ])

                            .then(([meeting1]) =>
                                User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123' })
                                    .then(user => logic.retrieveMeetings(user.id))
                                    .then(meetings => {
                                        console.log(meetings)
                                        expect(meetings).to.have.lengthOf(1)
                                        expect(meeting1.title).to.equal('My Event')
                                        expect(meeting1.address).to.equal('Calle falsa 1,2,3')
                                        expect(meeting1.location).to.deep.equal([41.93584282753891, 1.7719600329709349])
                                        expect(meeting1.date).to.be.instanceOf(Date)
                                        expect(meeting1.description).to.equal('We are gonna have some fun')
                                        expect(meeting1.image).to.equal('http://images.com')


                                    })
                            )
                    )
            )
    )


    after(mongoose.disconnect)
})



// const meeting1b = meetings.find(meeting => meeting.id === meeting1.id)

// expect(meeting1.author.id).to.equal(user.id)
// expect(meeting1.author.name).to.equal('Paquito Chocolatero')
// expect(meeting1b.title).to.equal('My Event')
// expect(meeting1b.address).to.equal('Calle falsa 1,2,3')
// expect(meeting1b.location).to.deep.equal([41.93584282753891, 1.7719600329709349])

// expect(meeting1b.date).to.be.instanceOf(Date)
// expect(meeting1b.description).to.equal(meeting1.description)
// expect(meeting1b.image).to.equal(meeting1.image)


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