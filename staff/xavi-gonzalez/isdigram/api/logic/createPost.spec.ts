import dotenv from 'dotenv'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect, use } from 'chai'
import { errors } from 'com'
import chaiAsPromised from 'chai-as-promised'
import { User, Post } from '../data/index.ts'

const { Types: { ObjectId } } = mongoose

const { NotFoundError } = errors

dotenv.config()

use(chaiAsPromised)

// const { expect } = chai

describe("createPost", () => {
  before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

  it('creates post with image and text from existing user', () =>
    User.deleteMany()
      .then(() =>
        Post.deleteMany()
          .then(() =>
            User.create({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' })
              .then(user =>
                logic.createPost(user.id, 'http://images.com/whatever', 'hello post')
                  .then(() =>
                    Post.findOne({})
                      .then(post => {
                        expect(post.author.toString()).to.equal(user.id)
                        expect(post.image).to.equal('http://images.com/whatever')
                        expect(post.text).to.equal('hello post')
                        expect(post.date).to.be.instanceOf(Date)
                      })
                  )
              )
          )
      )
  )

  it('fails to create a post with image and text from non-existing user', () =>
    User.deleteMany()
      .then(() =>
        Post.deleteMany()
          .then(() =>
            User.create({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' })
              .then(user =>
                //version antigua
                //logic.createPost(new ObjectId().toString(), 'http://images.com/whatever', 'hello post')
                //     .catch(error => {
                //         expect(error).to.be.instanceOf(NotFoundError)
                //         expect(error.message).to.equal('user not found')
                //     })
                expect(logic.createPost(new ObjectId().toString(), 'http://images.com/whatever', 'hello post')).to.be.rejectedWith(NotFoundError, 'user not found')
              )
          )
      )
  )

  //TODO all methods

  after(() => mongoose.disconnect())
})