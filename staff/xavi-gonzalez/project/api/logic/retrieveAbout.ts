//@ts-nocheck
import { ObjectId } from 'mongoose'

import { validate, errors } from 'com'

import { User } from '../data/index.ts'

const { SystemError, NotFoundError } = errors

type UserResponse = {
    about: string
}

function retrieveAbout(userId: string, targetUserId: string): Promise<UserResponse>{
    validate.text(userId, 'userId', true)
    validate.text(targetUserId, 'targetUserId', true)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return User.findById(targetUserId).select('-_id about').lean()
        })
        .then(user => {
            if (!user) throw new NotFoundError('target user not found')

            return { about: user.about }
        })
}

export default retrieveAbout