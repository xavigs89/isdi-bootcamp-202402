//@ts-nocheck
import dotenv from 'dotenv'

import mongoose from "mongoose";
import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors


describe('retrieveAbout', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves about from existing user', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: 'Isdicoders1', avatar: null, about: 'hola que tal' }))
            .then(user =>
                User.create({ name: 'Pepe Phone', email: 'pepe@phone.com', password: '123qwe123', avatar: null, about: 'estoy en la b' })
                    .then(user2 => logic.retrieveAbout(user.id, user2.id))
                    .then(user => {
                        expect(user.about).to.equal('estoy en la b')
                    })
            )

    )

    after(() => mongoose.disconnect())
})