import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { CredentialsError, NotFoundError }= errors

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds on existing user and correct credentials', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
            .then(user => 
                logic.authenticateUser('paquito', 'Isdicoders1')
                    .then(userId => {
                        expect(userId).to.be.a('string')
                        expect(userId).to.equal(user.id)
                    })
            )
    )

    it('fails on existing user and incorrect password', () =>   
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
            .then(() => logic.authenticateUser('paquito', 'Isdicoders4587'))
            .catch(error => {
                expect(error).to.be.instanceOf(CredentialsError)
                expect(error.message).to.equal('wrong password')
            }) 
    )

    it('fails on existing user and incorrect username', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Paquito Chocolatero', birthdate: '1989-04-25', email: 'paquito@gmail.com', username: 'paquito', password: 'Isdicoders1' }))
            .then(() => logic.authenticateUser('paquito4', 'Isdicoders1'))
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('user not found')
            })
    )




     // TODO add other unhappy test cases

     it('fails on non-string username', () => {
        //const username = 26
        let errorThrown

        try{
            //@ts-ignore
            logic.authenticateUser(26, 'Isdicoders1')
        } catch (error) {
            errorThrown = error
        }
        expect(errorThrown).to.be.instanceOf(TypeError)
        expect(errorThrown.message).to.equal('username 26 is not a string')
    })

    it('fails on empty username', () => {
        //let empty = ''
        let errorThrown

        try{
            logic.authenticateUser('', 'fails2024')
        } catch (error) {
            errorThrown = error
        }
        expect(errorThrown).to.be.instanceOf(Error)
        expect(errorThrown.message).to.equal('username >< is empty or blank')
    })

    it ('fails on non-valid password', () => {
        let errorThrown
        let password = 'I am not a valid password'

        try {
            logic.authenticateUser('paquito', password)
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(Error)
        expect(errorThrown.message).to.equal('password is not acceptable')
    })








     after(() => mongoose.disconnect())

})