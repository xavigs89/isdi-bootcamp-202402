import dotenv from 'dotenv'

import mongoose from "mongoose";
import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors


describe('retrieveUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves existing user', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
            .then(user =>
                User.create({ name: 'Pepe Phone', birthdate: '2000-01-01', email: 'pepe@phone.com', username: 'pepephone', password: '123qwe123' })
                    .then(user2 => logic.retrieveUser(user.id, user2.id))
                    .then(user => {
                        expect(user.name).to.equal('Pepe Phone')
                        expect(user.username).to.equal('pepephone')
                    })
            )

    )

    it('does no retrieve by non-existing user', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
            .then(user =>
                User.create({ name: 'Pepe Phone', birthdate: '2000-01-01', email: 'pepe@phone.com', username: 'pepephone', password: '123qwe123' })
                    .then(user2 => logic.retrieveUser(new ObjectId().toString(), user2.id))
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('user not found')
                    })
            )
    )

    it('does no retrieve a non-existing target user', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
            .then(user =>
                User.create({ name: 'Pepe Phone', birthdate: '2000-01-01', email: 'pepe@phone.com', username: 'pepephone', password: '123qwe123' })
                    .then(user2 => logic.retrieveUser(user.id, new ObjectId().toString()))
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('target user not found')
                    })
            )
    )

    // TODO test all methods




    it('fails on non-string userId', () => 
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
            .then(user => 
                User.create({ name: 'Pepe Phone', birthdate: '2000-01-01', email: 'pepe@phone.com', username: 'pepephone', password: '123qwe123' })
                    .then(user2 => {
                        const userId = 26
                        let errorThrown

                        try {
                            //@ts-ignore
                            logic.retrieveUser(userId, user2.id)
                        } catch (error) {
                            errorThrown = error
                        }

                        expect(errorThrown).to.be.instanceOf(Error)
                        expect(errorThrown.message).to.equal('userId 26 is not a string')                        
                    })
            )
    )

    it('fails on empty userId', () => 
        User.deleteMany()
        .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
        .then(user => 
            User.create({ name: 'Pepe Phone', birthdate: '2000-01-01', email: 'pepe@phone.com', username: 'pepephone', password: '123qwe123' })
                .then(user2 => {
                    const userId = ''
                    let errorThrown

                    try {
                        //@ts-ignore
                        logic.retrieveUser(userId, user2.id)
                    } catch (error) {
                        errorThrown = error
                    }

                    expect(errorThrown).to.be.instanceOf(Error)
                    expect(errorThrown.message).to.equal('userId >< is empty or blank')                        
                })
            )
    )

    it('fails on non-string targetUserId', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
            .then(user => 
                User.create({ name: 'Pepe Phone', birthdate: '2000-01-01', email: 'pepe@phone.com', username: 'pepephone', password: '123qwe123' })
                    .then(user2 => {
                        const userId = 26
                        let errorThrown

                        try {
                            //@ts-ignore
                            logic.retrieveUser(user.id, userId)
                        } catch (error) {
                            errorThrown = error
                        }

                        expect(errorThrown).to.be.instanceOf(TypeError)
                        expect(errorThrown.message).to.equal('targetUserId 26 is not a string')                        
                    })
            )
    )

    it('fails on empty targetUserId', () => 
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
            .then(user => 
                User.create({ name: 'Pepe Phone', birthdate: '2000-01-01', email: 'pepe@phone.com', username: 'pepephone', password: '123qwe123' })
                    .then(user2 => {
                        const userId = ''
                        let errorThrown

                        try {
                            //@ts-ignore
                            logic.retrieveUser(user.id, userId)
                        } catch (error) {
                            errorThrown = error
                        }

                        expect(errorThrown).to.be.instanceOf(Error)
                        expect(errorThrown.message).to.equal('targetUserId >< is empty or blank')                        
                    })
            )
    )




    after(() => mongoose.disconnect())
})