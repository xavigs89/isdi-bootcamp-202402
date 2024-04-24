import dotenv from 'dotenv'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect, use } from 'chai'
import { errors } from 'com'
import chaiAsPromised from 'chai-as-promised'

dotenv.config()

use(chaiAsPromised)


import { User, Event } from '../data/index.ts'

describe('createEvent', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('creates an event with title, address, location, date, duration, description, image from existing user', () =>
        User.deleteMany()
            .then(() =>
                Event.deleteMany()
                    .then(() =>
                        User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123' })
                            .then(user => {
                                // const currentDate = new Date()
                                // const formattedDate = currentDate.toISOString().slice(0,10)

                                logic.createEvent(user.id, 'My Event', 'Calle falsa 1,2,3', [41.93584282753891, 1.7719600329709349], '2024-02-15', '21:30', 'We are gonna have some fun', 'http://images.com')
                                    .then(() => {
                                        Event.findOne({})
                                            .then(event => {
                                                expect(event.author.toString()).to.equal(user.id)
                                                expect(event.title).to.equal('My Event')
                                                expect(event.address).to.equal('Calle falsa 1,2,3')
                                                expect(event.location).to.deep.equal([41.93584282753891, 1.7719600329709349])
                                                expect(event.date).to.equal('2024-02-15')
                                                expect(event.date).to.be.instanceOf(Date)
                                                expect(event.description).to.equal('We are gonna have some fun')
                                                expect(event.image).to.equal('http://images.com/myevent')
                                            })
                                    })
                            })
                    )
            )
    )


})