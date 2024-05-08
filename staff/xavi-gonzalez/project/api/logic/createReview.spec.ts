//@ts-nocheck
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect, use } from 'chai'
import { errors } from 'com'
import chaiAsPromised from 'chai-as-promised'

dotenv.config()

use(chaiAsPromised)


import { User, Review } from '../data/index.ts'

describe('createReview', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('creates a review with rate and optional comment from existing user', () =>
        Promise.all([
            User.deleteMany(),
            Review.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123', avatar: null, about: null })
            )
            .then(user =>
                logic.createReview(user.id, 4, 'I enjoyed the meeting'))
            .then(() => Review.findOne({ }))
            .then(review => {
                console.log(review)
                // expect(review.author.toString()).to.equal(user.id)
                expect(review.rate).to.be.a('number')
                expect(review.comment).to.equal('I enjoyed the meeting')
            })
    )

    // it('throws an error when creating a review with an invalid rate', () =>
    //     Promise.all([
    //         User.deleteMany(),
    //         Review.deleteMany()
    //     ])
    //         .then(() =>
    //             User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123', avatar: null, about: null })
    //         )
    //         .then(user =>
    //             expect(logic.createReview(user.id, 'invalid_rate', 'I enjoyed the meeting')).to.be.rejectedWith('Invalid rate')
    //         )
    // )

    // it('throws an error when creating a review without providing a rate', () =>
    //     Promise.all([
    //         User.deleteMany(),
    //         Review.deleteMany()
    //     ])
    //         .then(() =>
    //             User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123', avatar: null, about: null })
    //         )
    //         .then(user =>
    //             expect(logic.createReview(user.id, null, 'I enjoyed the meeting')).to.be.rejectedWith('Rate is required')
    //         )
    // )



    after(() => mongoose.disconnect())

})