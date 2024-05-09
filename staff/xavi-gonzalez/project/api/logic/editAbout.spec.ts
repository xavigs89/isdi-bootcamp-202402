
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { expect, use } from 'chai'
import { errors } from 'com'

import logic from './index.ts'
import { User } from '../data/index.ts'

dotenv.config()

const { SystemError, NotFoundError } = errors


describe('editAbout', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    let userId

    beforeEach(() => {
        return Promise.all([
            User.deleteMany(),
        ])
        .then(() => User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123', avatar: null, about: null }))
        .then(user => {
            userId = user.id
        })
    })

    it('succeeds when you edit a meeting', () => {
        const updatedDescription = 'Updated Description'

        return logic.editAbout(userId, updatedDescription)
            .then(() => User.findById(userId))
            .then(updatedAbout => {
                console.log(updatedAbout)
                expect(updatedAbout).to.exist
                expect(updatedAbout.about).to.equal(updatedDescription)
            })
    })

    after(() => mongoose.disconnect())
})