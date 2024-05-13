
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User, Meeting, Review } from '../data/index.ts'
import logic from './index.ts'
import { expect, use } from 'chai'
import { errors } from 'com'


import chaiAsPromised from 'chai-as-promised'

dotenv.config()

use(chaiAsPromised)

const { Types: { ObjectId } } = mongoose
const { NotFoundError, SystemError } = errors

describe('retrieveReviews', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves all reviews from existing user', () =>
        Promise.all([
            User.deleteMany({}),
            Meeting.deleteMany({}),
            Review.deleteMany({})
        ])
            .then(() => Promise.all([
                User.create({ name: 'Xavi Gonzalez', email: 'xavi@gmail.com', password: '123qwe123', avatar: null, about: null }),
                User.create({ name: 'Perico de los Palotes', email: 'perico@gmail.com', password: 'Isdicoders1', avatar: null, about: null }),

            ]))
            .then(([user1, user2]) =>
                Promise.all([
                    Review.create({ author: user1.id, rate: 2, comment: 'I did not enjoyed the meeting', date: new Date, meeting: "663e381250eb943b328b327a" }),
                    Review.create({ author: user1.id, rate: 4, comment: 'I really enjoyed the meeting', date: new Date, meeting: "663e381050eb943b328b427a" }),
                    Review.create({ author: user2.id, rate: 5, comment: 'All perfect', date: new Date, meeting: "663e371050eb943b378b427a" })
                ])

                    .then(([review1, review2, review3]) => {

                        logic.retrieveReviews(user1.id)

                            .then(reviews => {

                                expect(reviews).to.have.lengthOf(3)
                                expect(reviews[0].rate).to.equal(2);
                                expect(reviews[0].comment).to.equal('I did not enjoyed the meeting');

                                expect(reviews[1].rate).to.equal(4);
                                expect(reviews[1].comment).to.equal('I really enjoyed the meeting');

                                expect(reviews[2].rate).to.equal(5);
                                expect(reviews[2].comment).to.equal('All perfect');

                            })

                    })
            )
    )
    after(() => mongoose.disconnect())
})