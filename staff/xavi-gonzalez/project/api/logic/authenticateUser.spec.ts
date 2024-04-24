import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'
import { getMaxListeners } from 'events'

dotenv.config()

const { CredentialsError, NotFoundError, ContentError }= errors

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds on existing user and correct credentials', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: 'Isdicoders1' }))
            .then(user => 
                logic.authenticateUser('paquito@gmail.com', 'Isdicoders1')
                    .then(userId => {
                        expect(userId).to.be.a('string')
                        expect(userId).to.equal(user.id)
                    })
            )
    )

    it('fails on existing user and incorrect password', () =>   
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: 'Isdicoders1' }))
            .then(() => logic.authenticateUser('paquito@gmail.com', 'Isdicoders4587'))
            .catch(error => {
                expect(error).to.be.instanceOf(CredentialsError)
                expect(error.message).to.equal('wrong password')
            }) 
    )

    it('fails on existing user and incorrect name', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: 'Isdicoders1' }))
            .then(() => logic.authenticateUser('paquito69@gmail.com', 'Isdicoders1'))
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    )


     // TODO add other unhappy test cases

    //  it('fails on non-string email', () => {
    //     //const username = 26
    //     let errorThrown

    //     try{
    //         //@ts-ignore
    //         logic.authenticateUser(26, 'Isdicoders1')
    //     } catch (error) {
    //         errorThrown = error
    //     }
    //     expect(errorThrown).to.be.instanceOf(ContentError)
    //     expect(errorThrown.message).to.equal('26 is not a string')
    // })

    // it('fails on empty email', () => {
    //     //let empty = ''
    //     let errorThrown

    //     try{
    //         logic.authenticateUser('', 'Isdicoders1')
    //     } catch (error) {
    //         errorThrown = error
    //     }
    //     expect(errorThrown).to.be.instanceOf(Error)
    //     expect(errorThrown.message).to.equal('email >< is empty or blank')
    // })

    it ('fails on non-valid password', () => {
        let errorThrown
        //let password = 'I am not a valid password'

        try {
            logic.authenticateUser('paquito@gmail.com', 'I am not a valid password')
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(Error)
        expect(errorThrown.message).to.equal('password is not acceptable')
    })


     after(() => mongoose.disconnect())

})