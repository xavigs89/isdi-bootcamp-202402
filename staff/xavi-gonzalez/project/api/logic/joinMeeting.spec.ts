import dotenv from 'dotenv'
import { errors } from 'com'
import mongoose from 'mongoose'
import { expect, use } from 'chai'

import { User, Meeting } from '../data/index.ts'


describe('joinMatch', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds when you join a meeting', () => 
    
    Promise.all([
        User.deleteMany({ }),
        Meeting.deleteMany({ })
    ])

        .then(() => User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123', avatar: null, about: null })
            .then
    
    
    
    ))
})
